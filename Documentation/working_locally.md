---
title: Working Locally
description: Working Locally
keywords: development, locally, local, work
author: einari
weight: 13
---

# Working Locally

## Local packages

A lot of projects have a `NuGet.config` file, in this you'll often find a local source and if you do a ...

```shell
$ dotnet restore
```

... it basically fails if you don't have the path it asks for.
If you're not interested in being able to deploy packages locally between different projects, you can add an option
to ignore this:

```shell
$ dotnet restore --ignore-failed-sources
```

Be aware that the NuGet.config file is hierarchical in nature and sources can be disabled at any level. If you are not finding
packages in the source you are expecting, check for disabled sources in any NuGet.config file. It will look like:

```xml
  <disabledPackageSources>
    <add key="local" value="true" />
  </disabledPackageSources>
```

## Debugging locally

Be sure to read the [README](https://github.com/dolittle/DotNET.Build/blob/master/README.md) for DotNET.Build before starting.

If you want do debug an application into Dolittle's source code, you **have** to follow these instructions:

1. You want to make sure that when building and packing the solutions they use the locally generated packages (the ones the DeployPackagesLocally.sh script creates and copies into the right place in %HOME%/.nuget/packages)
    - This is not the case for Dolittle/DotNET.Fundamentals, since it does not have dependency on other dolittle packages.
    - For the other solutions, in the parent directory (the directory where the Build folder is present) there should be a NuGet.Config file, that file should have a reference to the local packages folder.
      This can be achieved by, for example, having a
    ```
    <add key="local" value="%HOME%/.nuget/packages"/>
    ```
    as a child of a packageSources tag in the configuration tag in the top-level Nuget.Config file.
    Note that when you don't want the local v.1000 packages, this package feed source should either be disabled, or you can delete the local packages by running the DeleteLocalPackages.sh script in Build.
2. It is really important that you deploy the packages in the right order

    1. Dolittle/DotNET.Fundamentals
    2. Dolittle/Runtime
    3. Dolittle/DotNET.SDK
    4. All other dependencies
        - Note that the other dependencies **should** not have dependencies on each other. If they have, then there can be trouble when creating the packages.
          If you're having trouble with dependencies (assemblies not loading or similar errors at startup) then this might be the cause. Check the other dependencies if they have dependencies on each other and build and package them in the correct ordering.

3. Make sure that the application that you want to debug also has a packageSource reference to %HOME%/.nuget/packages. Do a dotnet clean && nuget restore && dotnet restore to ensure that the solution is using the locally deployed packages.

4. Happy debugging!

## Working across multiple projects

Most Dolittle projects has a sub module for dealing with builds and adding productivity to the development experience that you can read more about [here](https://github.com/dolittle/DotNET.Build).
In this there is a file called [DeployPackagesLocally](https://github.com/dolittle/DotNET.Build/blob/master/DeployPackagesLocally.sh).
Its purpose is to make it easier to work across multiple different projects that generate packages that are dependencies into higher level
projects.

The way it does this is to take advantage of the NuGet option of local packages.

It has been setup with an assumed structure, between the different projects and organisations that Dolittle has.
From the base path in which you have your repositories, lets assume you have a Dolittle folder and then the following structure:

```shell
+-- Dolittle
    +-- Packages (Target for NuGet packages being deployed)
    +-- DotNET.SDK
    +-- Runtime
    +-- DotNET.Fundamentals
    +-- [interaction (Organization)](https://github.com/dolittle-interaction)
    +---- AspNetCore
    +---- ... other repos
    +-- [platform (Organization)](https://github.com/dolittle-platform)
    +---- Sentry
    +---- ... other repos
```

As you can notice, there is a convention at play here - organizations are prefixed with `dolittle-`, whatever comes after the dash is then the name of the folder given. This is not important, but gives you a sense of the thinking and conventions going into this. All the repositories found in main [Dolittle repository](https://github.com/dolittle) are considered "root" or core building blocks and do not belong in a sub-folder as such.

To enable a faster feedback loop you can now start deploying packages locally and be able to `restore` directly from these
and also enable local debugging directly.

In order to do this, simply run the script from a shell:

```shell
$ ./Build/DeployPackagesLocally.sh
```

This script is maintained in the Build git submodule. The script will find the correct Packages folder assuming that it is in a folder that is a direct parent of the project you are deploying. If you use the conventions outlined above with the Dolittle root folder and a Packages child folder, it should work as intended.

# Known Issues

When trying to develop locally using the local packages that have been built from source, you should be aware of hard-coded versions in client code. The local packages will all have the version 2.0.0-alpha2.1000. Any hard-coded version will miss this local nuget source and instead go to the dolittle nuget source and pull the appropriate version. Unfortunately, this will likely pull a whole host of
other versions of the framework dlls that it relies on and lead to a "dll hell" scenario. Most likely this will manifest itself in a runtime exception of System.IO.FileLoadException, with the message "The located assembly's manifest definition does not match the assembly reference". Be sure to scrutinize the output of your builds and ensure that no other versions of Dolittle are being installed.

As well as hard-coded versions, you should have local versions built for all dolittle framework dlls used in your client project. For the same reason as a hard-coded version, a non local built version will not hit the local nuget cache and will pull down a different version of the framework.

When using workspaces in VSCode, be aware that things may be excluded from the Workspace that include references to other versions of the Dolittle framework. These will not be detected by search from within VSCode.
