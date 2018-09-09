---
title: Contributing
description: Learn about how to contribute
keywords: Contributing
author: einari
weight: 1
---
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”,
“RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in
[RFC 2119](https://tools.ietf.org/html/rfc2119).

You can contribute through the issues on any of the repositories in all the organizations found listed [here](https://github.com/dolittle/home)
If you want to contribute with code, you can submit a pull request with your changes.
This project has adopted the code of conduct defined by the [Contributor Covenant](http://contributor-covenant.org/) to clarify expected behavior in our community.
For more information see the [.NET Foundation Code of Conduct](http://www.dotnetfoundation.org/code-of-conduct). Read the [Code of Conduct](https://github.com/dolittle/Home/blob/master/CODE_OF_CONDUCT.md).

If you want to contribute to the documentation, you can do so by either using the "Improve this Doc" link at the top or
submit a pull request with documentation changes. The documentation sits inside the `Documentation` folder in the repository.
All documentation is written using the GitHub flavor of [markdown](https://guides.github.com/features/mastering-markdown/).
In addition to this, all API documentation comes from the code itself.
For C# code, one has to provide XML documentation in the code, without it the build will be broken.

When submitting a pull request, your code will be run on the build server where it will be compiled and automated tests are ran.
If this fail, your pull request will be marked as failing the build.

## The vision

There sits a vision behind Dolittle. Its not necessarily a fixed vision. But the primary objectives are to build a platform that is easy
to use, with high productivity and is easy to maintain. On top of this, the vision has always been and will continue to be to solve
problems for line-of-business applications. It is not aimed to solve arbitrary problems, even though Dolittle might be solving something
outside of the primary focus. This does mean that contributions to Dolittle might not be accepted. Its hard to keep it focused, but
the team behind it will do its best to maintain the focus and not let it diverge from the vision.

The vision of what needs to be implemented shifts over time as one learns and gains experiences from usage of Dolittle. Plus new
techniques and technologies emerges and Dolittle will adapt to these when it makes sense as well. These things, combined with a good
and open dialog with often makes the concrete plans less fixed.

## The Source

Dolittle is hosted on [GitHub](http://github.com) [here](http://github.com/dolittle/Dolittle), a social hub for software projects.

## Code review

When submitting a pull request, the code will be reviewed.
The things that are being looked at is as follows:

- Does it adhere to the vision. Get an idea from [here](overview)
- Naming of types, variables
- Does the code adhere to the patterns, practices and principles Dolittle is built upon (SOLID, SOC ++) - read more [here](overview)

## Specifications / Tests

All code should have automated tests.
Dolittle uses a branch of [Behavior Driven Development](http://en.wikipedia.org/wiki/Behavior-driven_development) referred to
as [Specification by Example](http://specificationbyexample.com). These are run continuously to make sure we keep the code as
we specified it to be and we don't get regressions.

Every pull request must have specifications that are passing associated with it as described below.

Read more about how this is done for [C#](csharp_specifications) and [JavaScript](javascript_specifications).