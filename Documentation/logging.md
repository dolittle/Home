---
title: Logging
description: Learn about how you should use logging in your code
keywords: Contributing
author: jakhog
weight: 13
---

Logs are an important tool for developers to both understand program flow, and trace down bugs and errors as they appear in their software.
Comprehensive, cohesive and focused log messages are key to the efficacy of logs as a development tool.
To ensure that we empower developers with our software, we have put in place five guiding principles for writing log messages.

## Structured log messages
Traditionally log messages have been stored as strings with data embedded with string formatting.
While being simple to store and transmit, these strings loose semantic and contextual information about data types and parameters.
This in turn makes searching and displaying log messages labour intensive and require specialised tools.

Modern logging frameworks support structured or semantic log messages.
These frameworks split the definition of the human readable log message from the data it contains.
All popluar logging frameworks support the [message template](https://messagetemplates.org/) format specification, or a subset thereof.

```csharp
logger.Trace("Committing events for {AggregateRoot} on {EventSource}", aggregateRoot.Id, eventSourceId);
```

```
TRACE 2020/04/03 12:19:58 Committing events for 9eb48567-c3ac-434b-90f1-26660723103b on 2fd8866a-9a4b-492b-8e98-791118552426
```

```json
{
    "level": "trace",
    "timestamp": "2020-04-03T12:19:58.060Z",
    "category": "Dolittle.Commands.Coordination.Runtime",
    "template": "Committing events for {AggregateRoot} on {EventSource}",
    "data": {
        "AggregateRoot": "9eb48567-c3ac-434b-90f1-26660723103b",
        "EventSource": "2fd8866a-9a4b-492b-8e98-791118552426"
    }
}
```

## Log message categories
To allow filtering of log messages from different parts of the source code during execution flow, log messages must contain a category.
In most languages this category is defined by the fully qualified name of the types that define the code executed, including the package or namespace in which the type resides.
These categories are commonly used during debugging to selectively enable `Debug` or `Trace` messages for parts of the software by defining filters on the log message output.

## Log output


## Log message levels
We define five log message levels that represent the intent or severity of the log message.
They are, in decreasing order of severity:

* `Error` - unrecoverable failure, resulting in end-user error.
* `Warning` - recoverable failure, preformance or functionality is degraded.
* `Information` - information that is needed to use the software, and user activity traces.
* `Debug` - execution activity and sub-activity checkpoints.
* `Trace` - detailed execution trace with data that affects flow path.

#### Error
An error log message indicates that an unrecoverable failure has occured, and that the current execution flow has stopped as a consequence of the failure.
The current activity that the software was performing is not possible to complete, and will therefore in most cases lead to an end user error message being shown.
For languages that have the concept of exceptions or errors, these must be included in an error log message.
An error log message indicates that immediate action is required to recover full software functionality.

#### Warning
While an error message indicates an unrecoverable failure, warning log messages indicate a recoverable failure or abnormal or unexpected behaviour.
The current execution flow is able to continue to complete the current activity by recovering to a fail-safe state, albeit with possible degraded performance or functionality.
Typical examples would be that an expected data structure that was not found but it is possible to continue with default values, or mulitple data structures were found where there should only be one, but it is safe to continue.
A warning log message indicates that cleanup or validation is required at a later point in time to recover or verify the intended software functionality.

Warning log messages are also used to warn developers about wrong usage of functionality, and deprecated functionality that will be removed in the future.

#### Information
Informational log messages tracks the general execution flow of the sofware, and provides the developer with required information to use the sofware correctly.
These log messages have long term value, and typically include host startup information and user interactions with the application.

Information level log messages is typically the lowest severity messages that will be written by default, and must therefore not be used to log messages that are not useful for while the software is working as expected.

#### Debug
Debug log messages are used by developers to figure out _where_ failures occur during execution flow while investigating interactively with the software.
These log messages represents high-level checkpoints of activities and sub-activities during execution flow, to give hints for what log message categories and source code to investigate in more detail.
Debug messages should not contain any data other than correlation and trace identifiers used to identify unique failing interactions.

#### Trace
Trace log messages are the most verbose of the log messages.
They are used by developers to figure out _what_ caused a failure or an unexpected behaviour, and should therefore contain the data that affects the execution flow path.
Typical uses of trace log messages are public methods on interface implementations, and contents of collections used for lookup.

## Log message style
