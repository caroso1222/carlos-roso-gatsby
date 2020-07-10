---
title: How to check NPM package availability
date: "2020-07-10T20:18:21.508Z"
description: A CLI to account for package moniker rules
draft: false
---

After hours of refactoring my code, renaming imports, demo site and repo, I realized I wasn't allowed to publish that name on NPM. I did look for it and it showed up as [non existant](https://www.npmjs.com/package/ngdialogs). It turns out there're some [package moniker rules](https://blog.npmjs.org/post/168978377570/new-package-moniker-rules?) I was not aware of.

In short, you aren't allowed to publish if your package name differs by punctuation with an existing package. That is, you can't use `mydialogs` if there's another package named `my-dialogs` already.

You can then use the CLI `name-exists` to check for real NPM name availability:

```
npx name-exists <package-name>
```

It uses an [offline snapshot](https://github.com/nice-registry/all-the-package-names) of all the package names in the registry and compare your package name against them all.
