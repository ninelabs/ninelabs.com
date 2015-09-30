# Master repo for the Nine Labs website

## Installing Locally

#### For newbies:
If you're new to development, you'll need to follow these steps first.

1. Create a new folder named `Projects` in your root directory. 
    1. Open Finder, click Go in the menubar, click "Go to Folder...".
    1. Type a tilde `~` in the box and click 'Go'
    1. Either option-click or use the menu to create a new folder and name it "Projects"
1. Install the [GitHub App](https://desktop.github.com)
1. Once the Github App is running, you'll need to [clone this repository](https://help.github.com/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop) to the `Projects` folder you just created.
1. Now you should be good to move on to the next steps.

#### For Pros:
**Important:** This assumes you are running OS X and already have [XCode](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12) and the [command line tools](http://stackoverflow.com/questions/9329243/xcode-4-4-and-later-install-command-line-tools) installed. If you don't please start at the [newbie](#for-newbies) section above.

To get running you'll need to install [Jekyll](http://jekyllrb.com/docs/installation/), [Bower](http://bower.io/#install-bower), and [Compass](http://compass-style.org/install/). 

#### Setting up Jekyll

First, make sure you have the Jekyll gem.

    gem install jekyll

Then install the Compass gem.

    gem install compass

Then install Bower. It depends on [Node](http://nodejs.org/) and [npm](http://npmjs.org/). It's installed globally using npm:

    npm install -g bower

*Also make sure that [git](http://git-scm.com/) is installed as some bower packages require it to be fetched and installed.*

**Now that things are installed**

Move into your ninelabs.com directory and start the Jekyll server.

    cd ninelabs.com
    jekyll serve

Now you can view your out-of-the-box website by going to [http://localhost:4000](http://localhost:4000).

Notes: We use [Sass](http://sass-lang.com/) installed via Bower.

---

## Deployment

To deploy go to the `ninelabs-website` channel in Slack and type `coup deploy ninelabs on production`.

#### If coup doesn't respond

Log into the ci box: `sudo su` and `start hubot`
