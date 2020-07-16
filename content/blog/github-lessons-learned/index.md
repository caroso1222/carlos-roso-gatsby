---
title: Lessons learned doing open source
date: "2020-07-16T11:34:37.921Z"
description: An introspection on my OSS work
draft: false
---

I'm not popular in Github but I have a [repo with 1.5K stars](https://github.com/caroso1222/notyf) and 1M hits/month. I got [some more](https://github.com/caroso1222) with a few hundred stars. Here's what I've learned along the way.

<div class="divider"></div>

#### Build good looking demos

This may come off as superficial but it's worked wonders. I write frontend libraries where demos are critical for adoption. I put a lot of hours [designing](https://dribbble.com/shots/10867744-Notyf-JavaScript-Open-Source-Library) and coding [good](https://ng-popups.carlosroso.com/) [looking](https://carlosroso.com/rmind/) [demos](https://carlosroso.com/rmind/).

#### It's fine to be inconsistent

I used to [beat myself](https://github.com/caroso1222/notyf/issues/21) for being inconsistent. Not anymore. Github is [my lab](https://github.com/logo-quiz/logo-quiz), not my job. I make sure to have a stable, working version on master and move on. I come back once [motivation strikes again](https://github.com/caroso1222/notyf/graphs/contributors). I play it long term.

#### Build framework-agnostic libraries

Building [libraries for frameworks](https://github.com/caroso1222/ng-lib-schematics) is fun and it has its niche. But, if you want to have more impact, architect your libraries to be [framework-agnostic](https://github.com/caroso1222/notyf) and easy to plug anywhere (see next point).

#### Write framework-specific recipes

Whether you do backend, frontend, ML, or whatever, chances are your users are using frameworks. [Write easy-to-follow recipes](https://github.com/caroso1222/notyf/tree/master/recipes) for how to plug your library into any of these abstractions. It'll boost adoption.

#### Have a clear scope

Devs complain about clients asking too much yet we do the same on Github. You'll get a myriad of feature requests if your OSS project takes off. Communicate your scope. Learn to [oblige](https://github.com/caroso1222/ng-lib-schematics/pull/7). Learn to [decline](https://github.com/caroso1222/notyf/issues/72).

#### Relaunch

I'm not a marketer so launching is always a gamble. What I've learned, though, is you must relaunch. People might have not seen your stuff the first time. Release a new version and [write a blog post](https://medium.com/hackernoon/the-last-toast-library-youll-ever-need-8629e61b8e91). [Tweet about it](https://twitter.com/caroso1222/status/1282781759105531909).

#### Sneak in to understand usage

Use the Github's [Dependency Graph](https://github.com/caroso1222/notyf/network/dependents?package_id=UGFja2FnZS0xNDQ5NDI5Nw%3D%3D) to see who's using your packages (lots of [supported ecosystems](https://docs.github.com/en/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)). Then visit your users' repos and analyze usage. Are they hacking it to fix a hidden bug? can you improve the API?

#### Use badges but don't oversell

[Scientific research has shown](https://cmustrudel.github.io/papers/icse18badges.pdf) that badges are positive signals for contributors and users. Adding a badge doesn't change popularity but popular projects are more likely to have badges. Use [assessment badges](https://cmustrudel.github.io/projects/badges/).

#### Use a GIF

You have just a few seconds to convince users to try your library. Put a GIF in the top of your README to help them quickly jump in. You can use [terminal screencasts](https://asciinema.org/), [GIF recordings](https://github.com/caroso1222/amazon-autocomplete/blob/master/README.md) or [screenshot sequences](https://github.com/sindresorhus/Gifski#screenshots).

#### Yes, build it again

Unless you're a seasoned OSS developer, you need to build *yet another version* of popular things. This will ignite your curiosity to try bolder things later. Don't try to code *the next big thing*. Just build something. Today.

#### Redifine success

I have [unpopular](https://github.com/caroso1222/rmind) [projects](https://github.com/caroso1222/node-reminders) with little to no installs. I'm proud of them, though. I learned a lot building them. I use them myself. I'm getting better and enjoying my projects. That's my ultimate bar for success.

#### Be aware of moniker naming rules

Not sure about other ecosystems but NPM has [moniker rules](https://blog.npmjs.org/post/168978377570/new-package-moniker-rules?) for package naming. I learned it the [hard way](https://carlosroso.com/how-to-check-npm-package-availability/). Pick a good name and make sure you can work with it. Only then start coding.

<div class="divider"></div>

This is a personal journal for things that have worked in my open source work. I'll keep updating this as I come up with new findings.

Do you have any advice to build good OSS projects? [Let me know!](/contact)
