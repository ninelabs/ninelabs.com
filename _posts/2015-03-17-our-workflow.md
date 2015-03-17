---
layout: notes
title: Our Workflow
author: Laura Lindeman
category: playbook
image: 
---
We've taken inspiration and tooling from [GitHub Flow](https://guides.github.com/introduction/flow/) in developing an efficient and effective way to get our work done.

We're a small team but often aren't working physically in the same location. Version control with GitHub is the perfect solution for our situation. Branches allow multiple team members to work on the same files and then merge the results together. Collaboration is a hallmark of our process, and, with GitHub, we can do that virtually, from anywhere in the world.

On any project that we take on, we follow the same basic steps to see it through to completion.

1. We create a GitHub repo and make sure the appropriate users have access to it.
2. We create staging environments using Digital Ocean. 

A staging environment mirrors the live version of whatever we're working on, but it provides a safe space to play with and test out changes before pushing them to production. Digital Ocean's API makes it easy to provision the environments we want.

Our projects typically fall into one of several buckets: pure JavaScript, pure PHP, Ruby, or a static site. We identify which category the project falls into and then design its environment accordingly.

After we set up the staging environment, we create a Capistrano recipe for deployment.
3. We set up our version of Hubot.
Our bots, Coup and Joan, deploy to the Digital Ocean box we've previously set up via a command in Slack that triggers a deployment using Capistrano. Whew! They serve as the communication piece between the developer and the server, and they save us a LOT of time.
4. We write the code.
5. We deploy.

All of the steps of our workflow process are independent from each other, so we can work on things in pieces. We run a continuous integration cycle of test, build, and deploy. We don't do rollbacks. Instead, we deploy changes *over* existing content, similar to what happens when you revert a pull request in GitHub.

Using this process, we've run deployments on projects from simple sites where staging is the same as production (such as GitHub pages) to more complex sites requiring shell-based access to build process that have to go on in the background during deployment.

