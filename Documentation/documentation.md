---
title: About contributing to documentation
description: Learn about how to contribute to documentation
keywords: Contributing
author: einari
---

# Documentation

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”,
“RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in
[RFC 2119](https://tools.ietf.org/html/rfc2119).

Documentation is a key success factor for adoption. This document describes the requirements for documentation.

## Convention and structure

Every repository has a `Documentation` folder in the root of it. The documentation engine is configured with well known repositories
that can contribute into the documentation as a whole. The type of content that goes into the `Documentation` folder is articles that explain
how particular subjects / topics work.

It is OK to add nodes to the hierarchy; this is done through folders. Grouping topics and having sub-topics will automatically show up in the
navigation of the documentation.

## General Articles

Articles that are of a general nature and does not really belong directly in either of the different repositories **SHOULD** be added to the
[documentation](https://github.com/dolittle/documentation) repository following the same conventions as for everything else.

## API Documentation

All public APIs **MUST** be documented regardless of what language and use-case.

### C# XML Comments

All C# files **MUST** be documented using the XML documentation as defined [here](https://msdn.microsoft.com/en-us/library/b2s063f7.aspx).
A tutorial can also be found [here](https://msdn.microsoft.com/en-us/library/aa288481(v=vs.71).aspx).

For inheritance in documentation, you can use the [`<ineritdoc/>`](https://ewsoftware.github.io/XMLCommentsGuide/html/86453FFB-B978-4A2A-9EB5-70E118CA8073.htm).

### JavaScript

All JavaScript files **MUST** be documented using JSDoc as defined [here](http://usejsdoc.org.)

## Markdown

All documentation is written in markdown following the [GitHub flavor](https://help.github.com/categories/writing-on-github/).
Markdown can be written using the simplest of editors (Pico, Nano, Notepad), but there are editors out there that gives
great value and guides you through giving you feedback on errors. Editors like [Visual Studio Code](http://code.visualstudio.com/)
and [Sublime Text](http://sublimetext.com) comes highly recommended.

Since the documentation is built by DocFX, you should read up on the markdown supported by it and extensions it supports [here](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html).

### Highlighting - notes

Sometimes you need to highlight something with a note. You **MUST** use the following type:

```markdown
{{% block note %}}
Notes can have [links](https://github.com/dolittle/home) and **formatting**
{{% /block %}}
```

this results in:

{{% block note %}}
Notes can have [links](https://github.com/dolittle/home) and **formatting**
{{% /block %}}

### Metadata

All files **MUST** have a metadata header at the top of the file following the following format:

```text
---
title: About contributing to documentation
description: Learn about how to contribute to documentation
keywords: Contributing
author: einari (your GitHub accountname)
---
```

Some of this metadata gets put into the generated HTML file and some of it is used for indexing and
other purposes and for future expansion.

## Documentation filenames

All files should be lower cased, words **MUST** be separated with underscore. Example: [*csharp_coding_styles.md*](csharp_coding_styles.md).
