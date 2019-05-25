---
title: Definition of done
description: Learn about what we at Dolittle defines as our definition of done
keywords: General
author: einari
weight: 9
---

We have a clear definition of what we consider to be done. These are the exit-criteria to determine if
an implementation is complete. The actual coding part is only part of what actual done is.
The definition of done is used actively when [pull requests]({{< relref pull_requests >}}) are reviewed.

This is our definition:

## Functional software

Core to everything coming through a pull request; it must be functional software. This means it should
have been tested by the developer or confirmed tested by a tester, or automated tests / specifications.

## Adhering to our values and principles

It is expected that the code is adhering to our [core principles]({{< relref core_principles >}}) and our
[development principles]({{< relref development_principles >}}), which are well founded in our
[core values]({{< relref core_values >}}).

## Following our expected structure

All code should be adhering to our [repository structure]({{< relref repositories >}}) and in general our
cohesion principles as found in [development principles]({{< relref development_principles >}}).

## Has automated specifications (tests)

We do not look at code coverage as a metric, but we look at the logical coverage. We expect our code to
have automated specifications (tests) around it on a unit level. We look for behavioral specifications.

## Has API documentation (XML, JsDoc, etc..)

All public APIs should have documentation around them, which is language specific and can be automatically
extracted and generated API documentation for our [documentation site](https://dolittle.io)

## Has general documentation

Documentation is important to have and to maintain on changes. It is expected that any minor version bump
contains the documentation for whatever is new and a major to contain the documentation for what has changed.
Read more on how to contribute to documentation [here](/contributing/documentation).

## Schemas for public formats

If exposing formats like JSON files that should be made available, create or remember to update the schema
for it for it to be published. E.g. [Schema Store](http://schemastore.org/json/)

## Ready to be deployed

Code should be ready to be deployed. Pull requests should never be made unless the code is ready to be deployed.
The definition of what deployment is, is defined by each repository. For some it means deploying a package
that can be consumed publicly. Which means it needs to be production ready. For other repositories, it could
mean it needs to be ready to deployed to a staging environment - typically for applications being used by
users.
