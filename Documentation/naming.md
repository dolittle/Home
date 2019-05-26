---
title: Naming
description: Learn about how Doolittle's naming conventions
keywords: General
author: einari
weight: 8
---

One of the most important aspects of maintainable code is readability.
Being able to identify what something does just by reading the name.
This applies to files, type names, functions / methods - all the way through.

## Abbreviations

You should not use abbreviations, unless they are well known and understood abbreviations,
such as `XML` or `JSON` or similar.

## Plural for modules / namespaces / folders

Typically when working on features, the feature represents an artifact in the system.
This artifact is often represented as a noun in the system and the feature concerning
the noun should be pluralized.

An example would be for instance `Employee` and the feature with everything related to
this artifact would be `Employees`. Examples from our own code-base could be the
[Applications](https://github.com/dolittle-fundamentals/DotNET.Fundamentals/tree/master/Source/Applications)
namespace, which holds [Application](https://github.com/dolittle-fundamentals/DotNET.Fundamentals/blob/master/Source/Applications/Application.cs).
Similarily; [ResourceTypes](https://github.com/dolittle-fundamentals/DotNET.Fundamentals/tree/master/Source/ResourceTypes)
with [ResourceType](https://github.com/dolittle-fundamentals/DotNET.Fundamentals/blob/master/Source/ResourceTypes/ResourceType.cs)
within it.

Database schemas, folders in systems or in general collections of artifacts should
similarly be named like this consistently.

## Prefix / postfix

Having prefixes or postfixes to type names is often considered a code-smell.
It can be an indication that the name alone is not saying what it is actually doing.
There is no reason to add the technical concern as a pre-/postfix.
Examples of pre-/postfixes you should avoid:

* Controller
* ViewModel
* Exception
* Factory
* Manager

Another common naming is to include the word `Base` as a prefix or postfix. This
should not be there.

Instead of adding post/pre-fixes; make the naming unambiguous instead.

## Upper CamelCase vs lower camelCase

All C# code consistently uses upper CamelCase - also called Pascal Case.
While all JavaScript is consistently using lower camelCase - with the exception of
types that can be instantiated. These have upper CamelCase. This last convention is
a convention that is common in the JavaScript space.

Going between the two worlds, Dolittle makes sure to translate everything.
During serialization for instance, translation is done for naming - both ways - making
it feel natural to a C# developer as well as a JavaScript developer.
