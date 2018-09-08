---
title: Null - the billion dollar mistake
description: Learn about how to work with runtime exceptions in code
keywords: Contributing
author: einari
weight: 7
---
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”,
“RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in
[RFC 2119](https://tools.ietf.org/html/rfc2119).

**Null** in code can be referred to the [billion dollar mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare).
You **MUST** at all times try to avoid using **null**. If you have something that is optional, don't use **null** as a way to check
for wether or not its provided. First of all, be explicit about what your dependencies are. A method should have overloads
without the parameters that are optional. For implementations that are optional, provide a *NullImplementation* as the
default instead. This makes program flow better and no need for dealing with exceptions
such as the [NullReferenceException](https://msdn.microsoft.com/en-us/library/system.nullreferenceexception(v=vs.110).aspx)