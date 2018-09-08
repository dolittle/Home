---
title: Editor config
description: Learn about how your editor should be configured
keywords: Contributing
author: einari
weight: 5
---
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”,
“RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in
[RFC 2119](https://tools.ietf.org/html/rfc2119).

In the root of all projects there **SHOULD** be a `.editorconfig` file that governs how your editor should be configured.
If your editor does not support it, you need to set this up manually.

## Default

All text files has this setting by default.

| Property    | Setting   |
| ----------- | --------- |
| End of line | LF (Unix) |
| Indent      | Spaces    |
| Indent size | 4         |

## YAML

For [YAML](https://en.wikipedia.org/wiki/YAML) files, the following properties are overridden.

| Property    | Setting   |
| ----------- | --------- |
| Indent size | 2         |
