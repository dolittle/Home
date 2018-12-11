---
title: Versioning
description: Learn about how Dolittle is versioned
keywords: General
author: einari, jakhog
weight: 6
---
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”,
“RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in
[RFC 2119](https://tools.ietf.org/html/rfc2119).

## Versioning

Dolittle adheres to the [Semantic Versioning v2](https://semver.org) versioning scheme.

This gives the following : `<major>.<minor>.<patch>`.

### Patch

Patches are improvements, bug fixes and similar and is to be considered backwards compatible.
This maps to the following changelog labels: *Fixed, Security*

### Minor

Minor contains new features / functionality and is to be considered backwards compatible.
This maps to the following changelog labels: *Added, Deprecated*

### Major

Major is a breaking change - not to be considered backwards compatible.
This maps to the following changelog labels: *Changed, Removed*

### Pre-release

Pre-releases are considered an edge case and deviates the normal versioning strategy.
Dolittle as a general principle does not apply this in general releases as a strategy,
but might take advantage of for special cases.

## Changelog

Dolittle adheres to the guidance in the [Keep a change log](https://keepachangelog.com/en/1.0.0/) site.

Types of changes / labels

| Label | Description | Backwards compatible |
| ----- | ----------- | -------------------- |
| Added | For new features | * |
| Changed | For changes in existing functionality | - |
| Deprecated | For soon to be removed features | * |
| Removed | For now removed features | - |
| Fixed | For any bug fixed | * |
| Security | In case of vulnerabilities | * |

## Dependencies

Some package managers, like NuGet has a strategy of resolving to the lowest possible version it can.
This means that when you have an application consuming a dependency that has a dependency to something
that gets a patch, the application does not necessarily gain the benefit of this patch.

e.g.

```shell
+- Application
   +--- First level dependency
      +--- Second level dependency
```

When *patching* the second level, the first level also needs to be updated and the application itself
needs to chose a *wildcard* dependency for either **minor** or **patch** to be able to get the patch.
Dolittle recommends using a *wildcard* on **minor** and you can safely rely on the semantics of the versioning
to be accurate.

## Source Control

All repositories have a **master** branch which holds the current released software at any point in time.
The branch gets tagged with the appropriate version based on each merged pull request coming in.
This means that every pull request that gets merged will have a unique version number associated with it.

## Issues

Issues are to be associated with every pull request (read more [here](issues.md)).
This information is used to create the changelog and versioning. Labeling of these issues is therefor
vital.

| Change Log Label | Issue Label | Comment |
| ----- | ----------- | -------------------- |
| Added | - | Implicit if not having any other type label on the issue |
| Changed | breaking change | - |
| Deprecated | deprecation | - |
| Removed | removal | - |
| Fixed | bug | - |
| Security | security | - |

## Future

Dolittle is working on automating this and actually deducting the changes from the code from its public APIs.
This will in time make this less error-prone.