---
title: The ultimate 8-bullet checklist to ace the Full Stack interview project
date: "2020-04-28T21:20:30.375Z"
description: Clear steps to build a job-winning Full Stack project
draft: false
---

Interview processes at top remote work platforms like Toptal, Crossover or any other applicant vetting marketplaces will normally ask you to develop a project to evaluate your software engineering skills. I have cleared interviews at most of these places as well as reviewed dozens of projects myself.

These projects will normally take you 10-15 work hours, depending on your experience. It's a ton of work but it pays off once you land the job. Play it intelligently and spend those hours doing what's absolutely necessary to ace the interview.

These are the 8 points I think you should consider when developing a full stack project for an interview test project.

## 1. Unit Testing

Show your interviewer you're not just about building novel features. You think about maintainability and long-term project health so you're concerned about unit testing. There's no time to be exhaustive not even get to 100% coverage. Add some tests to the most important features both in the frontend and the backend. You can consider shooting some integration tests with Cypress which is easy to set up and will show how you think about integration.

## 2. Restful API

This is a must. You'll probably be asked to implement an API that needs to [CRUD](https://es.wikipedia.org/wiki/CRUD) 2 or 3 entities. Say, for instance, you're implementing a reminders manager. You'll have lists and reminders. Make sure you build your API following proper Restful principles. Having endpoints like `GET /lists/:id/reminders/:id` looks much more readable and maintainable than `POST /lists/:id/change-reminder-name?id=:id`. Please use the right HTTP verbs wherever appropriate. Without context, nothing is worse than seeing GET endpoints that mutate the DB state.

## 3. Scalability

With absolute certainty, your interviewer will ask you to do add a new feature to your project. If you built your front and back in a scalable way then you will have no trouble doing this. What does this mean? In the frontend, it will probably mean you can create new router and pages easily, you can reuse existing models, easily put components behind the auth wall, etc. In the backend, this will probably mean having a proper DB schema to add a new model, have a good role and permission system in place, have a correct util/shared file architecture, etc.

## 4. Intelligent use of external libraries

This is mostly aimed at the frontend as more JavaScript comes at a heavy cost in the client. You're probably playing it wrong if you import the whole moment.js, jquery or bootstrap.js into your project. Make sure you use your framework to query the DOM, use something lighter like date-fns for date management and boast about it in the interview, and show you can create good looking widgets yourself without too much external help.

## 5. Good looking UI

Don't hide behind that comfort wall of "I'm an engineer so I suck at design, but my code is elegant". Final users can't care less, they expect something that works AND looks good (don't call me off on the exceptions like reddit or hackernews). Your clients know that and will expect that, if you're calling yourself a full stack, then you can pull off a decently looking site. You probably don't have design skills but you can play it smart. Get yourself some package like angular material, tailwind or some other component framework and make sure to follow their guidelines. Don't get creative, it's not the time to discover your inner Picasso, just copy and follow the rules from those libraries.

## 6. Authentication & User Management

Auth is critical in 99% of the applications you'll create. If you're interviewing for backend or full stack, make sure your auth game is strong. Study how to hash passwords with salts, how oauth2 works and what they offer in terms of security, how users are safely stored in the DB. If you don't know any of that, don't be intimidated. I learned all that in one day straight and put it into practice the next few days. Interviewers will probably ask you to add a new role or to guard an endpoint behind an auth wall.

## 7. DB Management

You need to be confident supporting your decision to go with NoSQL or SQL databases. This intuition surely comes with years of experience but you don't have years to pass the interview. Get yourself familiar with those types of DBs, read and watch Youtube videos, check examples online and implement yours. Make sure you know how to change the schema, alter data, add new models. If you're using NodeJS + Express you can get an ORM like Mongoose to help you with all that.

## 8. Route Guards

This goes hand in hand with authentication. Make sure you know how to properly implement route guards both in the backend and the frontend. A route guard is a mechanism to protect your URLs (client) and endpoints (server) from being accessed without authentication. Frontend frameworks come equipped with these mechanisms already and backend apps can leverage something like JWT to validate the user.

<div class="divider"></div>

Now, keep in mind this might be opinionated. It's based on my experience both as a candidate and interviewer. It'll depend on what the interviewer is most inclined to (whether back or front) and their level of seniority. But, all in all, if you're able to follow these steps you're off to a great interview.

<div class="divider"></div>

Let me know on [Twitter](https://twitter.com/caroso1222) if you have gone through these interviews.


