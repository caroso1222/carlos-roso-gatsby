---
title: How to allow access from anywhere in MongoDB Atlas
date: "2020-06-24T22:04:05.018Z"
description: Critical step when setting up an API with Vercel
draft: false
---

When deploying a [MongoDB powered NodeJS API](https://vercel.com/guides/deploying-a-mongodb-powered-api-with-node-and-vercel) you'll be asked to setup a MongoDB Atlas account with whitelisted connections from anywhere. I got stuck on this part as Atlas enforces you to whitelist specific APIs.

As seen [here](https://docs.atlas.mongodb.com/security-whitelist/#enter-an-ip-address-cidr-block-or-security-group-id), the trick is to use a CIDR-notated IP address with value `0.0.0.0/0`.
