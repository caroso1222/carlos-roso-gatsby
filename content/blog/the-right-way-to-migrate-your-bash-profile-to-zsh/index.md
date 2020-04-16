---
title: The right way to migrate your bash_profile to zsh
date: "2020-04-16T19:36:14.104Z"
description: It's not only about zshrc
draft: false
meta: How to correctly migrate bash_profile to zsh using both zshrc and zshenv.
---

I've upgraded my Mac from macOS Mojave to macOS Catalina and the first thing I noticed is that [zsh](https://es.wikipedia.org/wiki/Zsh) is the new default shell, leaving Bash behind. I decided to switch but I found a few inconveniences with the setup, mainly with porting over my existing `bash_profile` to `zsh`.

# zsh startup files

`bash_profile` is bash specific, whereas `zsh` has its own set of [startup files](http://zsh.sourceforge.net/Intro/intro_3.html). I've seen people generally accept the suggestion of moving everything from `.bash_profile` to `.zshrc`. It definitely works, but it's not the strict appropriate way to do it.

## Enter `.zshenv`

zsh introduces 5  [startup files](http://zsh.sourceforge.net/Intro/intro_3.html), each one sourced depending on the type of shell invocation. The two most important are `.zshrc` and `.zshenv` which, according to the [man page](https://linux.die.net/man/1/zsh) and [some](https://www.reddit.com/r/zsh/comments/ewzrr6/etczshenv_vs_etczshzshenv/fg5uj6j/) [other](http://zsh.sourceforge.net/Intro/intro_3.html) [resources](https://unix.stackexchange.com/a/71258) , works like this:

* **`.zshenv`**: Sourced on **all invocations of the shell**. It often contains exported variables that should be available to other programs. For example, `$PATH`.
* **`.zshrc`**: Sourced in **interactive shells only**. It should contain commands to set up aliases, functions, options, key bindings, etc.

According to this, if you rely solely on `.zshrc`, your non-interactive shell scripts won't work if they depend on the `$PATH`.

> Your `$PATH` and any other important ENV variable should be set in `.zshenv`. The rest can go into `.zshrc`.

# Splitting instead of migrating

To put it in layman's terms:
1. Copy your `$PATH` statements from `~/.bash_profile` and copy them to `~/.zshenv` (create the file if you don't have it).
2. Copy your alias, functions, key bindings and more from `~/.bash_profile` to `~/.zshrc`.
3. Restart your terminal

<div class="divider"></div>

# Bonus

## Custom alias and functions

I keep my alias and functions in a separate file so that it doesn't clutter `zshrc`. You can try to do the same:

1. Copy your custom alias and functions from `~/.zshrc`
1. Paste these commands in a file called `~/.custom-alias`
2. Put this line at the end of your `.zshrc`: `source ~/.custom-alias`

## VSCode migration

VSCode will not catch up `zsh` as the default shell automatically. Adjust this with the following steps:

1. Open VSCode settings. Mac users can do `CMD + Shift + P` and type "settings".
2. Open the JSON view (top right button)
3. Type this at the end of the file:
```
"terminal.integrated.shell.osx": "/bin/zsh"
```
4. Restart VSCode.

Credits for VSCode migration: [Medium post](https://medium.com/fbdevclagos/updating-visual-studio-code-default-terminal-shell-from-bash-to-zsh-711c40d6f8dc).

