---
title: Core principles
description: Learn about the core principles of Dolittle
keywords: General
author: einari
weight: 4
---

## Security

From everything we do; security is at the heart. We want users to feel
secure when using systems built on top of the Dolittle frameworks and
platform. [Zero trust](https://www.paloaltonetworks.com/cyberpedia/what-is-a-zero-trust-architecture)
is way of thinking that basically ensures that all data and resources
are accessed in a secure manner. 

## Storage over compute

For everything we do at Dolittle nad in the Dolittle frameworks,
we always favor using more storage than compute. Compute-power is
always the most expensive part of systems while storage is the
cheapest. This means if one has the chance and it sustainable - 
duplicates in storage for different purposes is always preferred.
Since the Dolittle architecture is built around events and the
source of truth is sitting inside an event store, there is a great
opportunity of leveraging the storage capabilities out there and
really not be afraid of duplicates. This do however mean one needs
to embrace the concept of [eventual consistency](https://en.m.wikipedia.org/wiki/Eventual_consistency).

## Multi-tenancy

Since compute is the most expensive, the Dolittle frameworks and platform
has been built from the ground up with multi-tenancy in mind.
This basically means that a single process running the Dolittle runtime,
can represent multiple tenants of the application the runtime represents.
This makes for a more optimal use of resources. The way one then does
things is based on the execution context with the tenant information in
it, we can use the correct connectionstring for a database for instance
or other information to a resource.

## Tenant segregation

With everything being multi-tenant we also focus on segregating the tenants.
This principle means that we do not share a resource - unless it can cryptographically
guarantee that data could not be shared between two tenants by accident.
Everything in the Dolittle frameworks has been built from the ground up
with this in mind and with the resource system at play, you'll be able to
transparently work as if it was a single tenant solution and the Dolittle frameworks
in conjunction with the platform would then guarantee the correct resource.

## Privacy

Data should in no way made available to arbitrary personell. Only if the data owner
has consented should one get access to data. Much like [GDPR](https://eugdpr.org)
is saying for personal data and the consent framework defined, business to business
should be treated in the same way. This means that developers trying to hunt down
a bug, shouldn't just be granted access to a production system and its data without
the consent of the actual dataowner. An application developer that builds a
multi-tenant application might not even be the data owner, while its customers
probably are. This should be governed in agreements between the application owner and
the data owner.