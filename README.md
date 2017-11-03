
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/haystack/murmur?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Squadbox :heart::mailbox_with_mail: 
=

Fight harassment with your squad. Learn more at [squadbox.org](http://squadbox.org).

<img src="squadbox_sticker.png" width="350">

## Hi! :wave:
Thanks for checking out our repository! [Squadbox](http://squadbox.org) is a tool to help people who are being harassed online by having their friends (or “squad”) moderate their messages. 

In this README we cover:
* [The motivation behind the project](#motivation)
* [A broad overview of how it works](#how-it-works-wrench)
* [Who we are](#who-we-are)
* [What we need help with](#what-we-need-help-with)
* [How you can get involved!](#getting-involved)

## Motivation
Online harassment has become an increasingly prevalent issue - according to recent reports by [Data & Society](https://datasociety.net/blog/2017/01/18/online-harassment-digital-abuse/) and the [Pew Research Center](http://www.pewinternet.org/2017/07/11/online-harassment-2017/), nearly half of internet users in the United States have experienced some form of online harassment or abuse. Unfortunately, solutions for combating harassment have not kept up. Common technical solutions such as user blocking and word-based filters are blunt tools that cannot cover many forms of harassment, and can be circumvented by determined harassers.

Recently, researchers have tried to use machine learning models to detect harassment, but these models can be easily deceived and [contain gendered, racial, or other biases](https://medium.com/the-false-positive/better-discussions-with-imperfect-models-91558235d442). Given the strong evidence that automated tools are ineffective on their own, we propose that a better alternative is to continue engaging humans in the moderation process. However, while human moderators already make up many of the reporting pipelines for platforms, [harassment targets](https://www.buzzfeed.com/charliewarzel/a-honeypot-for-assholes-inside-twitters-10-year-failure-to-s) cannot currently count on [platform action](https://www.buzzfeed.com/charliewarzel/twitter-is-still-dismissing-harassment-reports-and) to shield them from harassment.

We conducted interviews with several targets of online harassment, and found that without existing effective solutions within platforms, targets often turn to the help of friends, using techniques such as giving friends password access to rid their inboxes of harassment, or forwarding unopened emails to friends to moderate. This motivates the design and implementation of tools like Squadbox, that is able to work externally from platforms to combat harassment. 

## How it Works :wrench:
People experiencing harassment sign up and create squads which they "own", and invite their friends or other trusted individuals to become moderators for their squad. The "owner" of the squad can set up filters to automatically forward potentially harassing incoming content to Squadbox’s moderation pipeline. When an email arrives for moderation, a moderator makes an assessment, adding annotations and rationale where needed. The message is then handled in a manner according to the owner’s preference, such as having the email delivered with a special tag, placed in a particular folder, or discarded.

Currently, Squadbox only works with email messages. We have plans to work on integrating it with other platforms like Twitter in the near future!

## Who We Are
We ([@amyxzhang](http://www.github.com/amyxzhang), [@kmahar](http://www.github.com/kmahar), [@karger](http://www.github.com/karger)) are a team of human-computer interaction researchers from the [Haystack Group](http://haystack.csail.mit.edu/) at [MIT CSAIL](http://www.csail.mit.edu/). 
While this started as a research project, with the help of the Mozilla Foundation's [Open Leaders program](https://mozilla.github.io/leadership-training/), we are now working to convert it to a full-fledged open source project in order to expand the number of people contributing and maximize the project's impact.

Please feel free to reach out to us on Github or via email at [squadbox@mit.edu](mailto:squadbox@mit.edu)! :email:

You can join our mailing list [here!](http://murmur.csail.mit.edu/groups/squadbox-discuss)

## What We Need Help With
We're looking for anyone who is passionate about this issue to help us build and improve Squadbox! We need programmers to help us code, designers to improve the interface and user experience, and people with experience and knowledge about online harassment and moderation to help guide our design choices, create resources for owners and moderators, etc. 

## Getting Involved 
Before you get started, please review our [contributor guidelines](/CONTRIBUTING.md). 

We use the [issue tracker](http://www.github.com/amyxzhang/squadbox/issues) to keep a list of work to be done on the project. We have a label for "good first issues" for getting your feet wet - you can see those issues [here](https://github.com/amyxzhang/squadbox/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22). If you're interested in working on one of them, go ahead and comment and we'll help you get started! :tada:

We have both coding and non-coding issues you can work on - while most on the list are coding, the non-coding ones can be found [here](https://github.com/amyxzhang/squadbox/issues?q=is%3Aopen+is%3Aissue+label%3Anon-coding).

If you'll be working on a coding issue, follow the [coding setup instructions](/coding_setup.md) to get a local version of the project up and running. 
