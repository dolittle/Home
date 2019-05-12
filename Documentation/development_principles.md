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

## SOLID

### Single responsibility principle

### Open / closed principle

### Liskow substitution principle

### Interface segregation principle

### Dependency inversion principle

## Separation of concerns

## Convention over configuration