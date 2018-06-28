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

As you can notice, there is a convention at play here - organizations are prefixed with `dolittle-`, whatever comes after the dash is then the name of the folder given. This is not important, but gives you a sense of the thinking and conventions going into this. All the repositories found in main [Dolittle repository](https://github.com/dolittle) is considered "root" or the core building blocks and does not belong in a sub-folder as such.

To enable a faster feedback loop you can now start deploying packages locally and be able to `restore` directly from these
and also enable local debugging directly.

In order to do this, simply run the script from a shell:

```shell
$ ./DeployPackagesLocally.sh
```

And since it's most likely a sub-module of the repo you're working in, you'll probably have to do this:

```shell
$ ./Build/DeployPackagesLocally.sh
```

At the time of writing this, the script is not very clever - so some of the sub organization repositories have their own shell scripts for doing the same thing. This will be improved in the future.
