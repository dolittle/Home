---
title: About Commands
description: Learn about Commands and how to leverage them in the frontend
keywords: JavaScript
author: einari, smithmx, tomase
---

# Commands

A Command is a typed representation of the user's intent in performing an action.  As such, it is a simple Data Transfer Object and performs no logic or calculations.  It is an instruction to the system to do something. This is a central part of the CQRS pattern, which separates the **Command** and **Query** parts of a system.

> [!Note]  
> A user does not have to be a person.  Another system can issue commands to our system and is considered a user.

Traditional N-tier systems often rely on **CRUD** when modelling the interactions with the system. This is an acronym for **C**reate, **R**ead, **U**pdate and **D**elete; which are the available actions on the data in the system. A command-driven system models different interactions users have with the system in terms of the intents of the users. The change is not just the changes to the data. A CRUD-system will only tell you the state of some entity. A command-driven system will try to capture why the entity is in that state as well.

Let me illustrate with an example: We have a customer with an address. This address changes at some time in our system. A CRUD system will tell you the current state of the customer, and may tell you when the address was changed and by whom. These details are often incidental to the state of the customer's address.

In a command-driven system any change to the address hinges on *why* the address changed: was it a fix to a typo, or did the customer move house? A CRUD system may have a screen showing the customer's address allowing any manner of changes. A command-driven system tries to capture the "why" of the change. We can create several commands for the same changes to data. If the distinction between fixing a typo and registering a move are important in our domain we capture that with different commands. How this is captured in a UI is a separate matter, but we model the commands in terms of intents that matter in the system.

## Naming

A command **SHOULD** be named in the imperative form.  It **SHOULD** also be named in accordance with the intention of the user
rather than the anticipated outcome of the command.  For example, *UpdateShoppingCart* is a poor command name.  It focuses on what will happen, rather than why the user wants to perform the action.  *AddItemToShoppingCart* better captures what the user wants to achieve, when clicking on an "Add to Cart" button.  It is also **recommended** to distinguish between similar actions that have the same main result.  For example, we could add further commands, even with identical structures and handling, to distinguish between *AddAccessoryToCart*, *AddRecommendationToCart*, *AddWishlistItemToCart* and so on, where these are or could be important distinctions in our domain. Identifying the salient commands in a system is an important part of building the domain.

## Transaction

A command is a transaction. There is no concept of a partially successful command.  You **MUST** structure and handle your commands such that the command succeeds or fails in its entirety. A transaction here is a domain concept, not a technical one. When modelling and naming your commands consider the invariants of your domain and the aggregate root that the command will act upon.

## Structure

A command **MUST** include all necessary information to perform the action.  These **should** be in the form of parameters on the command object. You **may** include optional parameters, though it is **recommended** that you create multiple commands that represent the different states associated with the optional parameters.  It is **recommended** that you use [Concepts](../concepts_and_value_objects.md) and [Value Objects](../concepts_and_value_objects.md) on your commands rather than primitives. This gives a more expressive command and aids in validation.

> [!Note]  
> For JavaScript, proxy representations can be used for the commands, read more about the mechanism [here](../../Frontend/JavaScript/proxy_generation.md).

## Relation to Events

An important point about commands is that while it is an imperative, it can fail. Once the command has clears validation it will cause actions to happen in the system that lead to events. These capture the changes in the system and cannot fail.

This is one important difference between these to central concepts. Commands capture intent but can fail. Events capture changes in the system and are immutable and are the truth about the system's state.

