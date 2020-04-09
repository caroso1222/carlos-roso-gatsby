---
title: How to run multiple curl requests sequentially
date: "2020-04-09T20:07:47.562Z"
description: In other words, how to pipe one curl's output to another curl request
draft: false
tags: ["bash", "programming"]
---

I came across this problem when trying to fetch the post title of the top HackerNews story. The HN API lets you grab the top stories IDs and the item's information. To accomplish this feature, we'll need to fire two sequential requests: first grab the top ID and then fetch that ID's information.

This can be done by understanding two concepts:
1. `curl` is not an async operation (unless appending a `&`)
2. String replacement: `${string/match/replacement}`

Let's see what the code looks like:

```bash{numberLines: true}
show_top_hn() {

  # 1st curl: fetch the top stories. Get the first element with jq. Store the result in 'post_id'.
  post_id=$(curl -s https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty | jq '.[0]')

  # Create a placeholder for the string replacement. We'll replace 'item_id' with the real item ID later on.
  item_request=https://hacker-news.firebaseio.com/v0/item/item_id.json?print=pretty

  # 2nd curl: fetch the top story's info. Use string replacement to plug the id into the 'item_request' string.
  item_data=$(curl -s "${item_request/item_id/$post_id}")

  # Grab the title from the returned JSON
  title=$(echo $item_data | jq -r '.title')

  # Grab the URL from the returned JSON
  url=$(echo $item_data | jq -r '.url')

  # Compose the final string
  echo "$title" "->" "$url"

}
```

<div class="divider"></div>

**Note**: The code snippet above uses [jq](https://stedolan.github.io/jq/) to parse the JSON response.

**Fun fact**: You can use this function to [see the top HackerNews article on every new terminal instance](/pimp-your-bash-profile-with-aliases-and-functions).
