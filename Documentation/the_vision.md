---
title: The Vision
description: Learn about the Dolittle vision
keywords: Contributing
author: einari
weight: 1
---

![Dolittle Vision](../images/vision.png)

There sits a vision behind Dolittle. Its not necessarily a fixed vision. But the primary objectives are to build a platform that is easy
to use, with high productivity and is easy to maintain. On top of this, the vision has always been and will continue to be to solve
problems for line-of-business applications. It is not aimed to solve arbitrary problems, even though Dolittle might be solving something
outside of the primary focus. This does mean that contributions to Dolittle might not be accepted. Its hard to keep it focused, but
the team behind it will do its best to maintain the focus and not let it diverge from the vision.

The vision of what needs to be implemented shifts over time as one learns and gains experiences from usage of Dolittle. Plus new
techniques and technologies emerges and Dolittle will adapt to these when it makes sense as well. These things, combined with a good
and open dialog with often makes the concrete plans less fixed.

## Background

Dolittle targets the line of business type of application development. In this space there are very often requirements that
are somewhat different than making other types of applications. Unlike creating a web page with content, line of business
applications has more advanced business logic and rules associated with it. In addition, most line of business applications
tend to live for a long time once they are being used by users. Big rewrites are often not an option, as it involves a lot of
work to capture existing features and domain logic in a new implementation. This means that one needs to think more
about the maintainability of the product. In addition to this, in a fast moving world, code needs to built in a way that
allows for rapidly adapting to new requirements. It truly can be a life/death situation for a company if the company is
not able to adapt to market changes, competitors or users wanting new features. Traditional techniques for building software
have issues related to this. N-tier architecture tends to mix concerns and responsibilities and thus leading to
software that is hard to maintain. According to [Fred Brooks](https://en.wikipedia.org/wiki/Fred_Brooks) and
["The Mythical Man-Month"](https://en.wikipedia.org/wiki/The_Mythical_Man-Month), 90% of the cost
related to a typical system arise in the maintenance phase. This means that we should aim towards building our systems
in a way that makes the maintenance phase as easy as possible.

The goal of Dolittle is to help make this better by focusing on bringing together good software patterns and practices,
and sticking to them without compromise. Dolittle embraces a set of practices described in this article and aims to adhere
to them fully.

## History

The project got started by [Einar Ingebrigtsen](https://github.com/einari) in late 2008 with the first public commits going out
to Codeplex in early 2009. It was originally called Bifrost. Source control History between 2009 and 2012 still sits [there](http://bifrost.codeplex.com). The
initial thoughts behind the project was to encapsulate commonly used building blocks. In 2009, [Michael Smith](https://github.com/smithmx)
and [Einar](https://github.com/einari) took the project in a completely different direction after real world experience with
traditional n-tier architecture and the discovery of commands. In 2012 it was moved to [GitHub](https://github.com/dolittle/DotNET.Core).

{{% notice information %}}
The original Bifrost repository can be found [here](https://github.com/dolittle/bifrost).
{{% /notice %}}

From the beginning the project evolved through the needs we saw when consulting for different companies. Amongst these were [Komplett](https://www.komplett.no).
It has always had a high focus on delivering the building blocks to be able to deliver the true business value. This has been
possible by engaging very close with domain experts and developers working on line of business solutions.

A presentation @ NDC 2011 showcases the work that was done, you can find it [here](https://vimeo.com/45594255).
From 2012 to 2015 it got further developed @ Statoil and their needs for a critical LOB application; ProCoSys.
In 2015, [Børge Nordli](https://github.com/bnordli) became the primary Dolittle resource @ Statoil and late 2015 he started
maintaining a [fork](https://github.com/ProCoSys/Dolittle) that was used by the project. Pull Requests from the fork has been
coming in steadily.

The effort of design and thoughtwork going into the project is a result of great collaboration over the years.
Not only by the primary maintainers; Michael, Børge and Einar - but all colleagues and other contributors to the project.
