---
title: How to add live reload to a static page
date: "2020-04-29T20:46:36.447Z"
description: Speed up dev time with live reload on vanilla static sites
meta: This post shows how to easily add live reload to a framework-less static site
draft: false
---

If you're working on a static page with no framework whatsoever, you probably don't have live reload by default. Learn how to integrate this power to your site in no time.

1. Create your static folder with the good old basic structure

```bash
$ mkdir static
$ cd static
$ touch index.html
$ touch styles.css
$ touch script.js
```

2. Write a basic HTML. **Live reload won't work if you don't have a `<head>` tag**

```html
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Hello Mars</title>
  <meta name="description" content="Hello Mars">
  <meta name="author" content="Carlos Roso">

  <link rel="stylesheet" href="styles.css">

</head>

<body>
  <script src="scripts.js"></script>
</body>
</html>
```

3. Install [live-server](https://github.com/tapio/live-server) globally.

```bash
$ npm i -g live-server
```

4. Run `live-server` in the root of your html file

```
$ cd static
$ live-server
```

5. This will open up the browser. Double check that you have the message `Live reload enabled.` printed in the console.

That's it. Now you can save changes and the browser will be automatically reloaded.

