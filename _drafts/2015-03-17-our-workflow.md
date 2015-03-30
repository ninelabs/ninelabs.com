---
layout: notes
title: Our Workflow
author: Laura Lindeman
category: playbook
image: //s3.amazonaws.com/ninelabs.com/roadmap.jpg
---
We're a small team who often aren't working in the same physical location. Creating a workflow that enables people to work whenever/wherever is critical to getting things done.

We've taken inspiration and tooling from [GitHub Flow](https://guides.github.com/introduction/flow/) in developing an efficient and effective way to get our work done.

Version control with GitHub is the perfect solution for our situation. Branches allow multiple team members to work on the same files and then merge the results together. Collaboration is a hallmark of our process, and, with GitHub, we can do that virtually, from anywhere in the world.

On any project that we take on, we follow the same basic steps to see it through to completion.

1. Create a GitHub repo and make sure the appropriate people have access to it.
1. Create a [staging environment](http://en.wikipedia.org/wiki/Staging_site) on [Digital Ocean](https://digitalocean.com). Their API makes it easy.
1. After we set up the staging environment, we create a [Capistrano](http://capistranorb.com) recipe for deployment.
1. We set up our version of [Hubot](https://hubot.github.com) (affectionately named Joan). Joan handles deployment to the staging server via a command in [Slack](https://slack.com) that triggers the Capistrano deployment routine. Whew! They serve as the communication piece between the developer and the server, and they save us a LOT of time.
1. We write the code.
1. We deploy.

All of the steps of our workflow process are independent from each other, so we can work on things in pieces. We run a continuous integration cycle of test, build, and deploy. We don't do rollbacks. Instead, we deploy changes *over* existing content, similar to what happens when you revert a pull request in GitHub.

Using this process, we've run deployments on projects from simple sites where staging is the same as production (such as GitHub pages) to more complex sites requiring shell-based access to build process that have to go on in the background during deployment.

Photo Credit: [Image](https://unsplash.imgix.net/45/eDLHCtzRR0yfFtU0BQar_sylwiabartyzel_themap.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050) by [Sylwia Bartyzel](https://unsplash.com/sylwiabartyzel) via Unsplash under [CC 0](https://unsplash.com/license)

