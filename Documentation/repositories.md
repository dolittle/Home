---
title: Repositories
description: Learn about how Dolittles and the repository structures
keywords: General
author: einari
weight: 11
---

All of Dolittle repositories aim for consistency in naming, structure, folder names.
The reason for this is two fold; developers will know where to find things, then we
have tooling that can consistently lean on the structure and just work.

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

## Source

All source representing the purpose of the repository, except samples, should be
within the Source folder.