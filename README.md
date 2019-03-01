# ![Dolittle Logo](Media/Logo.png)

[![Join the chat at https://gitter.im/dolittle/home](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dolittle/home?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Issues

All the different projects has their own issues and we keep track of everything in our [Waffle Board](https://waffle.io/dolittle/home)

[![Stories in Ready](https://badge.waffle.io/dolittle/home.png?label=ready&title=Ready)](http://waffle.io/dolittle/home)

Read about how we do our issues [here](./issues.md).

## Contributing

Read our [contribution guide](http://www.dolittle.io/Articles/contributing.html) and get familiar with our [code of conduct](CODE_OF_CONDUCT.md).

## Projects

This repository holds the issues across all projects organized in the [Projects](https://github.com/dolittle/Home/projects) tab above.It also contains the links to all the projects organized from here.

## Getting Started

Go to our [documentation site](http://www.dolittle.io) and learn more about the project and how to get started.

## Organizations

Dolittle consists of quite a few projects all geared towards different aspects. All these aspects has an organization representing them:

| Aspect | Description |
| ------ | ----------- |
| [Home / Main](https://github.com/dolittle) | Our landing point and spring board to the different aspects of the world of Dolittle |
| [Runtime](https://github.com/dolittle-runtime) | The core of the Dolittle Runtime. This is where you'll find things like the [DotNet SDK](https://github.com/dolittle-runtime/dotnet.sdk), [Runtime](https://github.com/dolittle-runtime/runtime) |
| [Interaction](https://github.com/dolittle-interaction) | All interaction layers are found here. An interaction layer is for instance a frontend, API or similar |
| [Fundamentals](https://github.com/dolittle-fundamentals) | Fundamental, reusable building blocks. Contains projects like [.NET Fundamentals](http://github.com/dolittle-fundamentals/dotnet.fundamentals) and [JavaScript Fundamentals](http://github.com/dolittle-fundamentals/javascript.fundamentals) |
| [Tools](https://github.com/dolittle-tools) | All tools for the platform |
| [Platform](https://github.com/dolittle-platform) | Most of Dolittle is open source, but there are aspects associated with the hosted experience that is closed source; this is where we keep these - privately. All issues are however represented by a [public repository](https://github.com/dolittle-platform/home) |
| [Extensions](https://github.com/dolittle-extensions) | All extensions provided to the frameworks and platform is found here. For instance things like our [Autofac](https://github.com/dolittle-extensions/DotNET.DependencyInversion.Autofac) support, or [MongoDB Event Store](https://github.com/dolittle-extensions/Runtime.Events.MongoDB) |
| [Samples](https://github.com/dolittle-samples) | All samples for using Dolittle |
| [Entropy](https://github.com/dolittle-entropy) | When we want to try out new things, we keep them here first. A way of brainstorming around new concepts and ideas. |
| [Contribs](https://github.com/dolittle-contribs) | Contributions to the platform. This is often a stepping stone on becoming formalized into the core frameworks and platform. |
| [Boilerplates](https://github.com/dolittle-boilerplates) | Boilerplates for tooling experience for getting started with different projects and artifacts |

## Project map

| Project | Description |
| ------- | ----------- |
| [DotNET.Build](https://github.com/dolittle/dotnet.build) | Common build, settings and tools for .NET core developers |
| [DotNET.Fundamentals](https://github.com/dolittle-fundamentals/dotnet.fundamentals) | Fundamental generic building blocks for .NET |
| [DotNET.SDK](https://github.com/dolittle-runtime/dotnet.sdk) | The .NET SDK for interacting with Dolittle |
| [DotNET.DependencyInversion.Autofac](https://github.com/dolittle-extensions/DotNET.DependencyInversion.Autofac.sdk) | The .NET SDK for interacting with Dolittle |
| [Runtime](https://github.com/dolittle-runtime/runtime) | Runtime for Dolittle - this is the core of the platform |
| [MongoDB Event Store](https://github.com/dolittle-extensions/Runtime.Events.MongoDB) | Event Store implementation for MongoDB |
| [In Memory Event Store](https://github.com/dolittle-extensions/Runtime.Events.InMemory) | Event Store implementation for InMemory |
| [MongoDB Read Models](https://github.com/dolittle-extensions/ReadModels.MongoDB) | ReadModel support for for MongoDB |
| [JavaScript Build](https://github.com/dolittle/JavaScript.Build) | Common build for JavaScript based repositories |
| [JavaScript.Fundamentals](https://github.com/dolittle-fundamentals/JavaScript.Fundamentals) | Fundamental generic building blocks for JavaScript |
| [AspNetCore](https://github.com/dolittle-interaction/AspNetCore) | The interaction for ASP.NET Core - typically API endpoints |
| [Styles](https://github.com/dolittle-interaction/Dolittle.styles) | The [Dolittle styles framework](http://styles.dolittle.io) |
| [JavaScript](https://github.com/dolittle-interaction/JavaScript) | The core reusable JavaScript building blocks for interaction |
| [JavaScript.Client](https://github.com/dolittle-interaction/JavaScript.Client) | The client reusable JavaScript building blocks for interaction |
| [Digital Twin Studio](https://github.com/dolittle-interaction/digital_twin_studio) | Our Digital Twin Studio - interaction |
| [JavaScript.Build.Aurelia](https://github.com/dolittle-interaction/JavaScript.Build.Aurelia) | Our build pipeline for Aurelia based applications |
| [cli](https://github.com/dolittle-tools/cli) | Command Line Interace for working with the Dolittle platform |
| [vscode](https://github.com/dolittle-tools/vscode) | Visual Studio Code extension |
| [Continuous Improvement](https://github.com/dolittle-platform/continuous_improvement) | Our continuous improvement system |
| [Sentry](https://github.com/dolittle-platform/sentry) | Our federated identity, access and licensing gateway |
| [Registry](https://github.com/dolittle/registry) | Our application registry |
| [Studio](https://github.com/dolittle/studio) | Our studio - the Dolittle portal |

## Packages

| Platform | Production   | From CI  |
| ------- | ------- | ------ |
| .NET Fundamentals | [![NuGet](https://img.shields.io/nuget/v/dolittle.Assemblies.svg)](https://www.nuget.org/packages?q=dolittle) | [![MyGet](https://img.shields.io/myget/dolittle/vpre/dolittle.Assemblies.svg)](https://www.myget.org/gallery/dolittle) |
| .NET Runtime | [![NuGet](https://img.shields.io/nuget/v/dolittle.Runtime.Events.svg)](https://www.nuget.org/packages?q=dolittle.Runtime) | [![MyGet](https://img.shields.io/myget/dolittle/vpre/dolittle.Runtime.Events.svg)](https://www.myget.org/gallery/dolittle) |
| .NET SDK | [![NuGet](https://img.shields.io/nuget/v/dolittle.svg)](https://www.nuget.org/packages?q=dolittle.sdk.commands) | [![MyGet](https://img.shields.io/myget/dolittle/vpre/dolittle.sdk.commands.svg)](https://www.myget.org/gallery/dolittle) |
| ASP.NET Core | [![NuGet](https://img.shields.io/nuget/v/dolittle.aspnetcore.commands.svg)](https://www.nuget.org/packages?q=dolittle.aspnetcore) | [![MyGet](https://img.shields.io/myget/dolittle/vpre/dolittle.aspnetcore.commands.svg)](https://www.myget.org/gallery/dolittle) |
| Autofac | [![NuGet](https://img.shields.io/nuget/v/dolittle.dependencyinversion.autofac.svg)](https://www.nuget.org/packages?q=dolittle.dependencyinversion.autofac) | [![MyGet](https://img.shields.io/myget/dolittle/vpre/dolittle.dependencyinversion.autofac.svg)](https://www.myget.org/gallery/dolittle) |
| Runtime.Events.MongoDB | [![NuGet](https://img.shields.io/nuget/v/dolittle.runtine.events.mongodb.svg)](https://www.nuget.org/packages?q=dolittle.runtime.events.mongodb) | [![MyGet](https://img.shields.io/myget/dolittle/vpre/dolittle.runtime.events.mongodb.svg)](https://www.myget.org/gallery/dolittle) |
| ReadModels.MongoDB | [![NuGet](https://img.shields.io/nuget/v/dolittle.readmodels.mongodb.svg)](https://www.nuget.org/packages?q=dolittle.readmodels.mongodb) | [![MyGet](https://img.shields.io/myget/dolittle/vpre/dolittle.readmodels.mongodb.svg)](https://www.myget.org/gallery/dolittle) |

## Build Status

| Project | Windows | Linux / macOS |
| -------- | ------ | ------------- |
| .NET Fundamentals | [![Build status](https://ci.appveyor.com/api/projects/status/r53j9v19idi903ol?svg=true)](https://ci.appveyor.com/project/Dolittle/dotnet-fundamentals) [![AppVeyor tests](https://img.shields.io/appveyor/tests/Dolittle/dotnet-fundamentals.svg)]() | [![Travis Build Status](https://travis-ci.org/dolittle/DotNET.Fundamentals.svg?branch=master)](https://travis-ci.org/dolittle/DotNET.Fundamentals) |
| .NET Runtime | [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/83b4tlt2euskb582?svg=true)](https://ci.appveyor.com/project/Dolittle/dotnet-runtime) [![AppVeyor tests](https://img.shields.io/appveyor/tests/Dolittle/dotnet-runtime.svg)]() | [![Travis Build Status](https://travis-ci.org/dolittle/DotNET.Runtime.svg?branch=master)](https://travis-ci.org/dolittle/DotNET.Runtime) |
| .NET SDK | [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/umi5t4qs6stw9uud?svg=true)](https://ci.appveyor.com/project/Dolittle/core) [![AppVeyor tests](https://img.shields.io/appveyor/tests/Dolittle/core.svg)]() | [![Travis Build Status](https://travis-ci.org/dolittle/DotNET.SDK.svg?branch=master)](https://travis-ci.org/dolittle/DotNET.SDK) |
| ASP.NET Core | [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/r2q9b9ya1vygyx9o?svg=true)](https://ci.appveyor.com/project/Dolittle/aspnetcore) [![AppVeyor tests](https://img.shields.io/appveyor/tests/Dolittle/aspnetcore.svg)]() |  |
| Autofac | [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/cijukudqo5wobrst?svg=true)](https://ci.appveyor.com/project/Dolittle/dotnet-dependencyinversion-autofac) [![AppVeyor tests](https://img.shields.io/appveyor/tests/Dolittle/dotnet-dependencyinversion-autofac.svg)]() |  |
| ReadModels.MongoDB | [![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/s95va5xrrg57sfdp?svg=true)](https://ci.appveyor.com/project/Dolittle/readmodels-mongodb) [![AppVeyor tests](https://img.shields.io/appveyor/tests/Dolittle/readmodels-mongodb.svg)]() |  |
| Runtime.Events.MongoDB | [![Build status](https://ci.appveyor.com/api/projects/status/kjtjm9bol8xl9c62?svg=true)](https://ci.appveyor.com/project/Dolittle/runtime-events-mongodb) [![AppVeyor tests](https://img.shields.io/appveyor/tests/Dolittle/runtime-events-mongodb.svg)]() | |
