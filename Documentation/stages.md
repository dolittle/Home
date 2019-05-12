---
title: Stages
description: Learn about stages in development
keywords: Development, Principles
author: einari
weight: 11
---

Every feature added to parts of the Dolittle platform has different development stages.
For each of these stages there is a set of **REQUIRED** capabilities associated with it.
The capabilities expected vary somewhat between the different type of features and due to the
nature of the feature becomes **OPTIONAL**.
Some things has a natural public endpoint, while others don't.

The driving force behind defining the different stages is to get a rapid feedback loop.
Deliver the bare minimum and gain experience and improve.

In no way does this mean that a feature is parked or finished, it should constantly evolve
and be iterated on.

We define the stages as general:

| Stage | Description |
| ----- | ----------- |
| 0     | Proof of concept - proving a piece of functionality |
| 1     | Minimum viable solution - it should work, but does not have the experience of use yet |
| 2     | Basic tooling - typically something like CLI access - if applicable |
| 3     | Advanced tooling - typically in the sense of a UI - if applicable |
| 4     | Developer tools - extensions to supported developer tools like IDEs or similar |

## Common

At the core of everything we do we require the following:

### Specifications

All units of code should have automated specifications around them. It is not a goal of 100% coverage of code
lines, but close to a 100% coverage of critical logic and the interaction between systems - which is mocked out.

### Core Principles

At the heart of everything we do sits core principles that are considered **REQUIRED**.
Read more [here]({{< relref contributing >}}) and for more context, read [here]({{< relref overview >}}).

### Logging

Part of understanding a system is to be able to in production bubble up what it going on and follow execution paths.
Logging helps with this and is a minimum requirement.

## Cross Cutting

Throughout the different stages, hardening needs to be done. Once it has left the first stage and into a
system and runs in production; the learning of what works and what doesn't comes. This needs to be fed
into the production immediately and takes priority.

## Stage 0

Some features needs to be proven before it gets commitment from the platform. In this phase you might piggyback
off of other peoples work and do the shortest path to proving the functionality you're aiming for.
A concrete example in Dolittle has been the proving of inter-bounded context communication where the first
version that proved all the concepts was built on top of Kafka. While Kafka was not a viable solution for
the long run.

*Stage 0* is an **OPTIONAL** stage. Some functionality don't need this stage as it is ready to be developed
into *Stage 1* directly.

## Stage 1

When coming up with new functionality it is very important to gain experience from it as soon as possible.
The first stage represents the MVP - Minimum Viable Product, or in our case solution. Getting it into
systems that proves what works and what does not and feed the result back as soon as possible is the primary
objective for this stage.

### Telemetry

Some features requires the recording of telemetry. The telemetry is used by the platform to keep track of different
performance indicators. This could be details like time spent processing, hit-count or similar.
If the functionality being build has a natural set of performance indicators or feeds indirectly into others, it needs
to use the telemetry system for this.

*Telemetry* is **OPTIONAL** and depends on the nature of the functionality being built.

### API

The most important aspect of any new feature is to work on the design of the API - the surface that is being used.
Getting the implementation wrong is much more forgiving than getting the design of the API surface wrong.
Most effort should go into the design and the API.

*API* is **REQUIRED**. Either it is an internal API or a public API, it still is the contract and needs the most attention.

### API Documentation

All code artifacts should adhere to the language specific approach to document the API. In C# for instance, it should be
in the form of [XML documentation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/xmldoc/xml-documentation-comments).

*API Documentation* is **REQUIRED**

### Public APIs - Interaction

Some features are expected to be used in Dolittle tools, be it CLI tools,
All public APIs must [dogfood](https://www.urbandictionary.com/define.php?term=dogfooding%20%28to%20dogfood%29) Dolittle.
This means that all APIs are represented as Commands and Queries and has a full cycle. State changes must be represented as
events. A public API in Dolittle is not represented as a REST API, although that is one of the interaction layers available.
A REST API is just one of many options for the different entrypoints (Commands / Queries).

*Public APIs* is **OPTIONAL**. Not all functionality needs to be interacted with and is just used internally.

## Stage 2

Vital part of the success of a lot of features is the capability of interacting with it through tooling.
The [tools organization](https://github.com/dolittle-tools) holds the different tools, such as the [CLI](https://github.com/dolittle-tools/cli);
which is often a starting point for a lot of the tools.

Other tooling experience could also be small widgets in Web developer tools.

*Stage 2* is **OPTIONAL**. Not all functionality needs to be exposed in tooling.

## Stage 3

Part of the Dolittle platform is the [Studio](https://github.com/dolittle-platform/Studio) - the portal in which you
have the full overview of the runtime environment and management tools to help you manage running systems built with
Dolittle.

*Stage 3* is **OPTIONAL**. Not all functionality needs to be exposed in Studio.

## Stage 4

In order to make it simpler for developers, providing proper tooling experience inside code editors or IDEs - can make it
a lot more accessible. The [tools organization](https://github.com/dolittle-tools) holds the different tools, including
developer tools that extends these.

*Stage 4* is **OPTIONAL**. Not all functionality needs to be exposed in Developer Tools.