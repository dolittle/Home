---
title: Development principles
description: Learn about the development principles of Dolittle
keywords: General
author: einari
weight: 5
---

We at Dolittle believe that properly crafted code will make
for maintainable systems over time. Based on experience, we have
found principles that helps us do just that and we've proven it
time and time again that it truly does helps investing in this.

## Consistency

One of the hardest things to accomplish is consistency, even
within a single codebase. The Dolittle frameworks and platform
span a number of projects and repositories and it becomes
increasingly more important to stay consistent. Consistent in
structure, naming, approach, principles, mindset and all. 
The consistency enables a high level of predictability and
makes it easier to navigate for anyone using Dolittle frameworks.
For anyone maintaining Dolittle frameworks, it means that its
easier to navigate and change context between tasks.

## High cohesion

Rather than grouping artifacts by its technical nature; keep 
the things that are relevant to each other close. This makes it
easier to navigate and provides a more consistent structure than
having to divide by technical nature. For anyone coming into a
project and developing on a specific feature will have an easier
time understanding and mastering that feature when its all in the
same location.

[Cohesion](https://en.m.wikipedia.org/wiki/Cohesion_(computer_science))
is more than just at a file level within a feature, it
is a mindset of keeping everything that belongs together close.
Thats why we apply this for instance at a [repository](./repositories.md)
level as well. 

High cohesion is core to the concept of a [bounded context](https://www.martinfowler.com/bliki/BoundedContext.html).

Divide only by the tier the artifacts belong to. See Example below.

### Frontend (Web)

    +-- Bounded Context 1
    |   +-- Module 1
    |   +---- Feature 1
    |   |     | View.html
    |   |     | ViewModel.js
    |   |     | Styles.css
    |   |     | SomeRestAPI.cs
    |   |     | SomeSignalRHub.cs
    |   +---- Feature 2
    |   |     | View.html
    |   |     | ViewModel.js
    |   |     | Styles.css
    |   |     | SomeRestAPI.cs
    |   |     | SomeSignalRHub.cs
    +-- Bounded Context 2
    ...


### Domain

    +-- Bounded Context 1
    |   +-- Module 1
    |   +---- Feature 1
    |   |     | Command.cs
    |   |     | CommandInputValidator.cs
    |   |     | CommandBusinessValidator.cs
    |   |     | CommandHandler.cs
    |   |     | SecurityDescriptor.cs
    |   |     | CommandHandler.cs
    |   |     | AggregateRoot.cs
    |   |     | Service.cs
    |   +---- Feature 2
    |   |     | Command.cs
    |   |     | CommandInputValidator.cs
    |   |     | CommandBusinessValidator.cs
    |   |     | CommandHandler.cs
    |   |     | SecurityDescriptor.cs
    |   |     | CommandHandler.cs
    |   |     | AggregateRoot.cs
    |   |     | Service.cs
    +-- Bounded Context 2
    ...

### Event

    +-- Bounded Context 1
    |   +-- Module 1
    |   +---- Feature 1
    |   |     | Event.cs
    |   +---- Feature 2
    |   |     | Event.cs
    +-- Bounded Context 2
    ...

### Read

    +-- Bounded Context 1
    |   +-- Module 1
    |   +---- Feature 1
    |   |     | ReadModel.cs
    |   |     | Query.cs
    |   |     | QueryValidator.cs
    |   |     | SecurityDescriptor.cs
    |   |     | AggregateRoot.cs
    |   |     | Service.cs
    |   +---- Feature 2
    |   |     | ReadModel.cs
    |   |     | Query.cs
    |   |     | QueryValidator.cs
    |   |     | SecurityDescriptor.cs
    |   |     | AggregateRoot.cs
    |   |     | Service.cs
    +-- Bounded Context 2
    ...

## Loose coupling

## Automated testing - specifications

Part of being able to move fast with precision is having a good automated test regime. One that runt fast and can be relied upon for avoiding
regressions. Dolittle was built from day one with automated tests, or rather Specs - specifications. You can read more about how Dolittle
does this [here]({{< relref how_to_contribute >}}).

## SOLID

The [SOLID principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) aims to make it easier to create more maintainable software.
It has been the core principles at play from the beginning of Dolittle.
Below is a quick summary and some relations into Dolittle.

### Single Responsibility Principle

Every class should have a single responsibility.

### Open / Closed Principle

Systems and its entities should be open for extension, but closed for modification.
A good examples of this is how you can extend your system quite easily by just putting in new [event processor]({{< relref event_processors >}})
without having to change the internals of Dolittle.

### Liskov Substition Principle

Objects in a program should be replacead with instances of their subtypes without altering the correctness of that program.
An example of how Dolittle follows this is for instance the [event store]({{< relref event_store >}}) works.
It has multiple implementations and the contract promises what it can do, implementations need to adhere to the contract.

### Interface Segregation Principle

Interfaces should represent a single purpose, or concerns. A good example in .NET would be ``IEnumerable`` and ``ICollection``.
Where ``IEnumerable`` concerns itself around being able to enumerate items, the ``ICollection`` interface is about modifying
the collection by providing support for adding and removing. A concrete implementation of both is ``List``.

### Dependency Inversion Principle

Depend on abstractions, not upon the conrete implementations.
Rather than a system knowing about concrete types and taking also on the responsibility of the lifecycle of its dependencies.
We can quite easily define on a constructor level the dependencies it needs and let a consumer provide the dependencies.
This is often dealt with by introducing an [IOC](https://en.wikipedia.org/wiki/Inversion_of_control) container into the system.
Dolittle is built around this principle and relies on all dependencies to be provided to it.
It also assumes one has a container in place, read more ~~[here](../Backend/container.md)~~.

## Seperation of Concerns

Another part of breaking up the system is to identify and understand the different concerns and separate these out.
An example of this is in the frontend, take a view for instance. It consists of flow, styling and logic. All these are
different concerns that we can extract into their own respective files and treat independently; HTML, CSS, JavaScript.
Other good examples are validation, instead of putting the validation as attributes on a model in C# - separate these into their
own files like ~~[Dolittle enforces](../Backend/validation.md)~~.

Read more in details about it [here](https://en.wikipedia.org/wiki/Separation_of_concerns).

## Separation of concerns

## Decoupling & Microservices

At the heart of Dolittle sits the notion of decoupling. Making it possible to take a system and break it into small focused lego pieces
that can be assembled together in any way one wants to. This is at the core of what is referred to as
[Microservices](https://en.wikipedia.org/wiki/Microservices). The ability to break up the software into smaller more digestable components
that makes our software in fact much easier to understand and maintain. When writing software in a decoupled manner, one gets the
opportunity of composing it back together however one sees fit. You could compose it back in one application running inside a single
process, or you could spread it across a cluster. It really is a deployment choice once the software is giving you this freedom.
When it is broken up you get the benefit of scaling each individual piece on its own, rather than scaling the monolith
equally across a number of machines. This gives a higher density, better resource utilization and ultimately better cost
control. With all the principles mentioned in this article, one should be able to produce such a system and that is what
Dolittle aims to help with.

### Discovery

Dolittle is heavily relying on different types of discovering mechanisms.
For the C# code the discovery is all about types. It relies on being able to discover concrete types, but also implementations of interfaces.
Through this it can find the things it needs. You can read more about the type discovery mechanism ~~[here](../Backend/type_discovery.md)~~.
It automatically knows about all the assemblies and the types in your system through the ~~[assembly discovery](../Backend/assembly_discovery.md)~~
done at startup.

## Convention over configuration

Read more about conventions [here]({{< relref conventions >}}).

## Cross Cutting Concerns

When concerns are seperated out, some of these can be applied cross cuttingly. [Aspect-oriented programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming)
is one way of applying these. Other ways could be more explicitly built into the code; something that Dolittle enables.
The point of this is to be able to cross-cuttingly enforce code. Things that typically are repetitive tasks that a developer needs
to remember to do are good candidates for this. It could also be more explicit like the ~~[security descriptors](../Backend/security_descriptor.md)~~
in Dolittle that enables one to declaratively set up authorization rules across namespaces for instance.
This type of thinking can enable a lot of productivity and makes the code base less errorprone to things that needs to be remembered,
it can be put in place one time and one can rely on it. Patterns like [chain-of-responsibility](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern)
can help accomplishing this without going all in on AOP.
