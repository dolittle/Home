---
title: Repositories
description: Learn about how Dolittles and the repository structures
keywords: General
author: einari
weight: 11
---

All of Dolittle repositories should be consistent in naming, structure and folder names.
This gives us a higher level of consistency and it makes it easier for us to create
cross cutting tools that can be applied to all of our repositories.

As part of a [pull request review](./pull_requests.md) we look for this consistency and
make sure that everything is adhering to this structure.

One of the [core principles](./core_principles.md) is the high cohestion principle.
Keeping everything that belongs together close applies also to repositories. This is
why we keep everything related to a repository within the repository and not separate
on its function. An added benefit with that is that it is much easier to adhere to the
[definition of done](./definition_of_done.md).

## Short names

We do not use short names for folders nor files. Examples you'll find in other repositories
and might even be considered defacto standard, are things like `src` and such. 
We believe in things being ubiquitous and have a high focus on readability. Therefor, the
example above would be instead `Source`. 

## Structure

Below is the structure our repositories follow. All repositories might not have all elements,
but this is what is being adhered to.

```text
<Root of repository>
│
└─── Documentation
└─── Samples
└─── Schemas
└─── BoilerPlates
└─── Source
```

## Documentation

All the documentation, with the exception of except API documentation that is often generated
from source files, must be in the `Documentation` folder. Follow the 
[guide](/contributing/documentation) for contributing to the documentation.

All documentation is generated to our official [site](https://dolittle.io).
Putting things in here in the excepted format and structure, it will end up eventually
on the documentation site.

## Samples

Samples that show concrete examples directly linked to what the repository represents,
should be in the `Samples` folder. If there are multiple samples, these should have
folders named in a way that makes it self explanatory for what they show within the `Samples`
folder.

## Schemas

If the project exposes JSON formats that one wants to have published to the [Schema Store](http://schemastore.org/json/),
they should be located in the `Schemas` folder.

## BoilerPlates

Some projects has boiler plates that they use to make it easier for developers to get started.
This is typically used by the [Dolittle Tooling](https://github.com/dolittle-tools).
All boiler plates should be in the `BoilerPlates` folder at the root of the project.

## Source

All source representing the purpose of the repository, except samples, should be
within the Source folder.