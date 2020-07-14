---
title: Logging
description: Learn about how you should use logging in your code
keywords: Contributing
author: jakhog, woksin
weight: 13
---

Logs are an important tool for developers to both understand program flow, and trace down bugs and errors as they appear in their software.
Comprehensive, cohesive and focused log messages are key to the efficacy of logs as a development tool.
To ensure that we empower developers with our software, we have put in place five guiding principles for writing log messages.

## Structured log messages
Traditionally log messages have been stored as strings with data embedded with string formatting.
While being simple to store and transmit, these strings loose semantic and contextual information about data types and parameters.
This in turn makes searching and displaying log messages labour intensive and require specialized tools.

Modern logging frameworks support structured or semantic log messages.
These frameworks split the definition of the human readable log message from the data it contains.
All popular logging frameworks support the [message template](https://messagetemplates.org/) format specification, or a subset thereof.

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

## Log message levels
We define five log message levels that represent the intent or severity of the log message.
They are, in decreasing order of severity:

* `Error` - unrecoverable failure, resulting in end-user error.
* `Warning` - recoverable failure, performance or functionality is degraded.
* `Information` - information that is needed to use the software, and user activity traces.
* `Debug` - execution activity and sub-activity checkpoints.
* `Trace` - detailed execution trace with data that affects flow path.

#### Error
An error log message indicates that an unrecoverable failure has occurred, and that the current execution flow has stopped as a consequence of the failure.
The current activity that the software was performing is not possible to complete, and will therefore in most cases lead to an end user error message being shown.
For languages that have the concept of exceptions or errors, these must be included in an error log message.
An error log message indicates that immediate action is required to recover full software functionality.

#### Warning
While an error message indicates an unrecoverable failure, warning log messages indicate a recoverable failure or abnormal or unexpected behavior.
The current execution flow is able to continue to complete the current activity by recovering to a fail-safe state, albeit with possible degraded performance or functionality.
Typical examples would be that an expected data structure that was not found but it is possible to continue with default values, or multiple data structures were found where there should only be one, but it is safe to continue.
A warning log message indicates that cleanup or validation is required at a later point in time to recover or verify the intended software functionality.

Warning log messages are also used to warn developers about wrong usage of functionality, and deprecated functionality that will be removed in the future.

#### Information
Informational log messages tracks the general execution flow of the software, and provides the developer with required information to use the software correctly.
These log messages have long term value, and typically include host startup information and user interactions with the application.

Information level log messages is typically the lowest severity messages that will be written by default, and must therefore not be used to log messages that are not useful for while the software is working as expected.

#### Debug
Debug log messages are used by developers to figure out _where_ failures occur during execution flow while investigating interactively with the software.
These log messages represents high-level checkpoints of activities and sub-activities during execution flow, to give hints for what log message categories and source code to investigate in more detail.
Debug messages should not contain any data other than correlation and trace identifiers used to identify unique failing interactions.

#### Trace
Trace log messages are the most verbose of the log messages.
They are used by developers to figure out _what_ caused a failure or an unexpected behavior, and should therefore contain the data that affects the execution flow path.
Typical uses of trace log messages are public methods on interface implementations, and contents of collections used for lookup.

## Log output
The logs of an applications is its source of truth. It is important that log messages are consistent in where they are outputted and the format in which they are outputted. They should be outputted to a place where they can be easily retrieved by anyone who is supposed to read them. Log messages are normally outputted to the console, but they can also be appended to files. The log messages that are outputted should be readable and have a consistent style and format. 

### Configuring
We're not necessarily interested in all of the logging levels or all of the categories each time we run an application. The logging should be easily configurable so that we can choose what we want to see in terms of categories and the levels of the logging. For instance software running in a production environment should consider only logging information, warning and error log messages. While we may want to show more log messages when running in development mode. It is also important to keep in mind that logging can possibly have a considerable performance cost. This is especially important to consider when deploying software with lots of logging to production environments.

#### Asp.Net Core
We're using [Microsoft's logger](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-3.1) in the Dolittle framework for .Net. We can use the 'appsettings.json' to configure the logging and we can provide different configurations for different environments like production and development. Look [here](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-3.1) for information on Microsoft's logger.

## Log message
Log messages should be written in a style that makes it easy to navigate and filter out irrelevant information so that we can find the cause of any error that has occurred by simply reviewing the them. Logs should be focused and comprehensive for both humans and machines. They should also be consistent in format and style across platforms, languages and frameworks.

### Stick to English
There are arguably many reasons to stick to English-only log messages. One technical reason is that English ensures us that we stick to ASCII character set.
This is important because we don't necessarily know what happens to the log message. If the log messages uses specials character sets it might not render correctly or can become corrupt and thus unreadable.

### Log context
Each log message should contain enough information so that the intended reader understands exactly what is going on without having to read any prior log messages. When we write log messages it is in the context of the code that we write, in the context of where the log statement is, and it is easy to forget that this context information is not implicit in the outputted log. And depending on the content of those log messages they might even not be comprehendible in the end.

There are possibly multiple aspects of '_context_' in regards to logging. One might be the current environment or execution context of the application for when the logging is performed and the other might be domain specific context, meaning information regarding where the logging is taking place in the execution flow of an operation or values of interest like IDs and names. 
Log messages should have the appropriate information regarding the context relevant to the information that is intended to be communicated. For example for multi-threaded applications it would make sense to add information of the executing thread id and correlations between actions. And for multi-tenanted applications it would make sense to have information about the tenant the procedures are performed in.

It is important to consider the weight of the contextual information added to each log message. Adding lots of context information to every log message makes the log messages bloated and less human-readable. The amount of context information on a log message should be in proportion to the log message level. For instance an information log message should not contain lots of contextual information that is not strictly needed for the end-user to use the software while a trace or debug log message should contain the necessary information to deduce the cause of an error. For warning and error log messages that are produced as a result of an exception or error it is important to include the stacktrace of the exception/error as part of the log message. Usually the methods or procedures to create log messages at these levels has its own parameter for an exception/error that outputs a log with the stacktrace nicely formatted.

For statically typed languages the namespace of the code executing the logging statement is usually provided with the log message which is helpful information for the developers in the case of troubleshooting.

### Keep in mind the reader of the logs
We add logs to software because someone most likely has to read them someday. Thus it makes sense that we should keep in mind the target audience when writing log messages. Which person is most likely going to read a log message affects all the aspects of that log message; The log message content, level and category is dependent on that. Information log messages is intended for the end-user while trace and debug messages are most likely only read in the case of troubleshooting, meaning that only developers will read them. The content of the log message be targeted towards the intended audience.

### Don't log sensitive information
Sensitive information like personal identifiable information, passwords and social security numbers has no place in log messages.
