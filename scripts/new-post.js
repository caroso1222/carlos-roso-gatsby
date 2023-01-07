const fs = require('fs');
const slugify = require('slug');
const dateFns = require('date-fns');

const title = process.argv[2];

if (!title) {
  throw 'title is required!';
}

const slug = slugify(title.toLowerCase());
const date = dateFns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
const dir = `./content/blog/${slug}`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
} else {
  throw 'That post already exists!';
}

const finalTitle = title.charAt(0).toUpperCase() + title.slice(1);

fs.writeFileSync(
  `${dir}/index.md`,
  `---
title: ${finalTitle}
date: "${date}"
description: "TODO: CHANGE THIS!"
draft: false
---`,
  function(err) {
    if (err) {
      return console.log(err);
    }

    console.log(`${title} was created!`);
  }
);

// credits: https://joelhooks.com/a-handy-npm-script-for-creating-a-new-gatsby-blog-post
