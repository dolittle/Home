---
title: Domain Driven Design
description: Learn about Domain Driven Design and how it fits with Dolittle
keywords: Overview
author: einari
weight: 7
---

Dolittle got from the beginning set to embrace [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) and
its concepts from. The reason for this is that part of modelling a system is understanding the domain that the system is targetting and
understanding the vocabulary used by the domain experts in that domain and then be able to model exactly this.
DDD is all about getting to a ubiquitous language that all team members use and understand.

### Bounded context

In a large system you find that the system is not a single monolithic system, but rather a composition of smaller systems.
Rather than modelling these together as one, bounded contexts play an important role in helping you separate the different
sub systems and modelling these on their own. Putting it all together in one model tends to become hard to maintain over
time and often error prone due to different requirements between the contexts that has yet to be properly defined.
We see that we often have some of the same data across a system and chose to model this only once - making the model
include more than what is needed for specific purposes. This leads to bringing in more data than is needed and becomes
a compromise. Take for instance the usage of [Object-relational mapping](https://en.wikipedia.org/wiki/Object-relational_mapping)
and a single model for the entire system approach. If you have a model with relationships and you in reality have different
requirements you end up having to do a compromise of how you fetch it. For instance, if one your features displays all
the parts of the model including its children; it makes sense to eagerly fetch all of this to save roundtrips. While if
the same model is used in a place where only the top aggregate holds the information you need, you want to be able to
lazy load it so that only the root gets loaded and not its children. The simple solution to this is to model each of the
models for the different bounded contexts and use the power of the ORM to actually map to the database for the needs one
has.

The core principal is to keep the different parts of your system apart and not take any dependency on any other contexts.

All the details about a bounded context should be available in a context map. The context map provides then a highlevel
overview of the bounded context and its artifacts.

### Building blocks

Domain Driven Design provides a set of building blocks to be able to model the domain. Dolittle aims to include most of these
building blocks as long as it makes sense.

#### Value Object

A value object is an object that contains attributes but has no conceptual identity. They should be treated as immutable.
In Dolittle you'll find the [concept]({{< relref concepts_and_value_objects >}}) value object as a good example. Value objects does not hold
identity that make them unique in a system. For instance multiple persons can live on the same address, making the address
a great candidate for a value object as it is not a unique identifier.

#### Aggregate

Aggregates represents a collection of objects that are bound together to form a root entity. In Dolittle you'll find the
[AggregateRoot]({{< relref aggregate_root >}}) that represents this. Important aspect of the aggregate in Dolittle is
however that it does not expose any public state, whatever entities it relies on should only be used internally to
be able to perform business logic. The ``AggregateRoot``is also what is known as an [EventSource]({{< relref event_sourcing >}}).

### Entity

Entities are the artifacts that aggregates can use to form the root entity. They are uniquely identified in the system.
For [aggregate roots]({{< relref aggregate_root >}}) in Dolittle, it is about modelling the business logic that belong together.

#### Repository

The repository pattern is all about providing an abstraction for working with domain objects and be storage agnostic, but focused
around the needs of the domain model.
Since Dolittle is built around the concept of [CQRS](https://en.wikipedia.org/wiki/Command–query_separation#Command_Query_Responsibility_Segregation),
the domain repository is one that knows how to work with [aggregate roots]({{< relref aggregate_root >}}).

#### Service

When operations conceptually does not belong to the domain object, you can pull in supporting services.
These are not something the aggregate knows about, but something that knows about both and coordinates it.
In Dolittle this would be the [CommandHandler]({{< relref command_handler >}})

#### Domain Events

Important part of modelling the domain are the [domain events]({{< relref domain_events >}}). These are the things
the domain experts talk about, the consequences, the things that happens in the system. Domain events represents the actual
state transitions in a system. The [AggregateRoot]({{< relref aggregate_root >}}) is the place where events are produced.
