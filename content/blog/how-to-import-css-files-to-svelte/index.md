---
title: How to import CSS files to Svelte
date: "2020-07-07T16:59:36.764Z"
description: Learn how to import CSS from node_modules into Svelte components
draft: false
---

Here's how you import a CSS file from `node_modules` in a Svelte component. This post assumes you're bundling your app with Rollup.

1. Install the rollup plugin to process CSS files.

```
npm i rollup-plugin-css-only
```

2. Configure the plugin in `rollup.config.js`. This will tell rollup to read the CSS imports and write them in a file called `vendor.css`.

```diff
+ import css from 'rollup-plugin-css-only';

export default {
  input: 'src/main.js',
  output: { ... },
  plugins: [
+   css({ output: 'public/build/vendor.css' }),
    svelte({
      ...
    }),
    ...
};
```

3. Add the CSS file to `index.html`.

```diff
  <html lang="en">
  <head>
	...
+	<link rel='stylesheet' href='/build/vendor.css'>
    ...
    <script defer src='/build/bundle.js'></script>

  </head>

  <body>
  </body>
  </html>
```

4. Import your CSS file in `App.svelte`. It's not necessary to use the full path to `node_modules`.

```diff
 <script>
+   import 'notyf/notyf.min.css';
	export let name;
 </script>

 <main> <h1> Hello {name}! </h1> </main>

 <style> h1 { color: #ff3e00; } </style>
```
