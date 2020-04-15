---
title: How to preview a README with GitHub styles
date: "2020-04-15T15:31:09.375Z"
description: Use Python to preview markdowns as rendered in GitHub
meta: In this post I'll show how to preview markdown files, like README.md, before pushing the code to master. It's useful to write documentations and preview them before going live on GitHub.
draft: false
---

After trying a lot of tools there's only one that have worked flawlessly for me. It's a Python module called [grip](https://github.com/joeyespo/grip).


# Installation

You can either install it using [Homebrew](https://brew.sh/) (**recommended**) or Python.

## Homebrew

```bash
$ brew install grip
```

*You can skip to the Usage section now*.

## Python

I normally recommend using [virtualenvs](https://virtualenv.pypa.io/en/latest/) to install anything in Python. Install that along with [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/command_ref.html).


1. List your virtualenvs
```bash
$ lsvirtualenv
myenv
====
bar
====
```

2. Activate one environment
```bash
$ workon myenv
(myenv) $
```

3. Install `grip`
```bash
(myenv) $ pip install grip
```

# Usage

To render the readme of a repository:

```
$ cd my-repo
$ grip
 * Running on http://localhost:6419/
```

To render a specific markdown file:

```
$ grip CONTRIBUTE.md
 * Running on http://localhost:6419/
```

Open your browser at `http://localhost:6419`. Profit.

![screenshot for reminders github readme](reminders.png)
