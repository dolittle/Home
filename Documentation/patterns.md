---
title: Patterns
description: Learn about some of the patterns we apply in Dolittle
keywords: General
author: einari
weight: 5
---

## Backend

### Command Query Responsibility Segregation

Most systems has different requirements for the read and the write part of each bounded context. The requirements vary on what is
needed to be written in relation to what is being read and used. The performance characteristics are also for the most part different.
Most line-of-business applications tend to read a lot more than they write. [CQRS](https://en.wikipedia.org/wiki/Command–query_separation#Command_Query_Responsibility_Segregation)
talks about totally segregating the read from the write and treat them uniquely.
One finds [event sourcing]({{< relref event_sourcing >}}) often associated with CQRS, something that Dolittle has embraced and helps
bridge the two sides and stay completely decoupled. It is an optional part of Dolittle but hightly recommended together with an [event store]({{< relref event_store >}}).

![Simple CQRS Diagram](https://github.com/dolittle/home/raw/master/Documentation/images/cqrs.png)

## Frontend

### Model View View Model

MVVM is a variation of [Martin Fowler's](https://en.wikipedia.org/wiki/Martin_Fowler) [Presentation Model](http://martinfowler.com/eaaDev/PresentationModel.html).
Its the most commonly used pattern in XAML based platforms such as WPF, Silverlight, UWP, Xamarin and more.

#### Model

The model refers to state being used typically originating from a server component such as a database.
It is often referred to as the domain model. In the context of Dolittle, this would typically be the [ReadModel]({{< relref read_model >}}).

#### View

The view represents the structure and layout on the screen. It observes the ViewModel.

#### ViewModel

The ViewModel holds the state; the model and also exposes behaviors that the view can utilize.
In XAML the behaviors is represented by a [command](https://msdn.microsoft.com/en-us/library/system.windows.input.icommand(v=vs.110).aspx),
something that wraps the behavior and provides a point for execution but also the ability to check wether or not
it can execute. This proves very handy when you want to validate things and not be able to execute unless one is valid or is authorized.
Dolittle has the concept of commands, these are slightly different however. In fact, commands in Dolittle is a part of the domain.
It is the thing that describes the users intent. You can read more about them [here]({{< relref about_commands >}}).
In the Dolittle JavaScript frontend however, the type of properties found with the XAML platforms
can also be found here. Read more about the frontend commands ~~[here](../Frontend/JavaScript/commands.md)~~.

#### Binding

Part of connecting the View with the ViewModel and enabling it to observe it is the concept of binding.
Binding sits between the View and the ViewModel and can with some implementations even understand when values change
and automatically react to the change. In XAML, this is accomplished through implementing interfaces like [INotifyPropertyChanged](https://msdn.microsoft.com/en-us/library/system.componentmodel.inotifypropertychanged(v=vs.110).aspx)
and [INotifyCollectionChanged](https://msdn.microsoft.com/en-us/library/system.collections.specialized.inotifycollectionchanged(v=vs.110).aspx)
for collections.

Dolittle have full client support for both XAML based clients and also for JavaScript / Web based.
For XAML and what is supported, read more in detail ~~[here](../Frontend/XAML)~~.
For the JavaScript support, Dolittle has been built on top of [Knockout](http://knockoutjs.com) that provides ``obervable()`` and ``observableArray()``.
Read more about the JavaScript support ~~[here](../Frontend/JavaScript)~~.

#### Figures

A traditional MVVM would look something like this:

![MVVM Architectural Diagram](https://github.com/dolittle/home/raw/master/Documentation/images/mvvm.png)

With the artifacts found in Dolittle and more separation in place with CQRS, the diagram looks slightly different

![MVVM Architectural Diagram - Dolittle artifacts](https://github.com/dolittle/home/raw/master/Documentation/images/mvvm_Dolittle.png)

You can read more details about the MVVM pattern [here](https://en.wikipedia.org/wiki/Model–view–viewmodel).
