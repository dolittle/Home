---
title: Conventions
description: Learn about how Dolittle sees conventions
keywords: General
author: einari
weight: 6
---

Part of a matured and maintainable solution is its conventions.
All projects have this and they get established over time. The things
that says that business logic goes here, this type of files goes here.
The conventions established are often related to structure and it
helps with consistency in your codebase.

## Recipe driven development

Its not uncommon to have a Wiki with things to remember for different
types of code; recipes for what you need to remember to implement for
that particular type of building block. These are great candidates for
automation and can also be applied [cross cuttingly]({{< relref development_principles >}}).

## Convention over Configuration

Some systems require a lot of configuration to work and it might not
even just be a thing you do at the beginning - but you have to add
configuration over time as you move along. Dolittle believes that
we can do a lot of this using conventions and lean on the design
paradigm of [convention over configuration](https://en.m.wikipedia.org/wiki/Convention_over_configuration)
to do so. This helps lower the number of decisions a developer has to
do and as long as you stick with the conventions, it should all work out.

It also helps if you want to change the convention, as you don't need
to go change a lot of configuration in addition to changing the convention
that you might have enforced in structure.

## Code Conventions

We have great opportunities with modern development environments to
visit the code at build time or reflect / introspect on the code at
runtime. The benefits you can get from doing this are:

* Discover artifacts in your code to avoid having to explicitly add things in code;
which then makes your code adhere to the [open/closed principle](./core_principles.md)
* Consistency; when things are discovered you enforce a consistency in the codebase

An example of this for frontend development is how [Aurelia](https://aurelia.io)
automatically hooks up views and view models based on the name being the same.
In Dolittle we do a lot around discovering, in fact its one of the core things
we do consistently.

The simplest example of a convention in play in Dolittle is during initialization,
Dolittle will configure whatever [IOC container](https://en.wikipedia.org/wiki/Inversion_of_control)
you have hooked with conventions. One default convention plays a part here saying
that an interface named ``IFoo``will be bound to ``Foo``
as long as they both sit in the same namespace. You'll see this throughout Dolittle
internally as well, for instance ``ICommandCoordinator`` is bound to
``CommandCoordinator``.

The conventions at play are described throughout the documentation when it is relevant.
