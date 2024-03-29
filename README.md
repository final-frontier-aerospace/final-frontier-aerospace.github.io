Final Frontier Aerospace Systems and Technology Website
======

For General Users
------

If you are just a general user and are seeing this page, you may have meant to go [here](https://ffaero.com) instead.
However, if you found a bug in our website, you may report that [here](https://github.com/final-frontier-aerospace/final-frontier-aerospace.github.io/issues), or by clicking the _Issues_ tab above.

For Developers
------

If you find a bug, you can either report it here with an issue, or you can fix it and send us the fix with a pull request.
Also, you can fork our repository and use it for your own website, in which case the "For Team" section below may be helpful.

If you are another rocketry team using our website, we'd love to know.
It is not required, but an email to us at [ffaero@ffaero.com](mailto:ffaero@ffaero.com) would be appreciated.
However, please do not email us for any issues or questions about the website.
Use the GitHub interface for that.

For Team
------

### Where things are at

 * _/_data/navigation.yml_ describes the navigation bar at the top of the page
 * _/_posts/_ contains a file for every post on this website (for news-related things)
 * _/assets/_ contains pictures that are used from pages or posts
 * _/config.yml_ contains general configuration settings for the website
 * _/404.html_ is shown when a page is not found
 * _/about.md_ is the About Us page
 * _/index.md_ is the Home page
 * _/leadership.md_ is the Leadership page
 * _/sponsors.md_ is the Sponsors page
 * _/contact.md_ is the Contact page
 * _/new-members.md_ is the information for new members that is not available from the main navigation menu

### About specific page formats

#### Home

You should not have to change anything about the home page.
It just shows a list of all recent posts (see below section).
However, if you wish to change the pagination settings, those can be found in __config.yml_.

#### Posts

Posts must be called `YYYY-MM-DD-name-of-post.md` and be in the __posts_ folder.
They have the following format:

```yaml
---
title: "The Title of the Post"
date: YYYY-MM-DD hh:mm:ss -0X00
---

Post content
```

Posts will automatically be added to the home page and Atom feed once the file has been made and the date is not in the future.
However, a file has to be changed after the date is not in the future before the post will show up.

#### 404

This page is implemented in raw HTML, instead of Markdown or yaml like everything else.
If you need anything special changed about this page for some reason, go find a computer science student.

#### About

The about page is just normally formatted right now.
If any special formatting is applied later it can be documented here.

#### Leadership

The leadership page does not contain normal formatting at all.
Instead, the current leadership are defined in the yaml.
Under the `feature_row` key, each officer will have an entry in the following format, and the officer entries are sorted by most important first, least important last:

```yaml
- image_path: /assets/people/FirstnameLastname.jpg
  title: Firstname Lastname
  excerpt: Officer Role Name
  url: mailto:emailaddress@ksu.edu
  btn_label: Email
  btn_class: btn--primary
```

In addition, a picture will have to be uploaded in the `/assets/people/` folder to match the `image_path`.

#### Sponsors

The sponsors are put on the page with some irregular formatting.
Instead of putting them on the page, they are defined in the yaml.
Under the `feature_row` key, each sponsor will have an entry in the following format:

```yaml
- image_path: /assets/sponsors/Name.png
  title: Name
  excerpt: Brief description of what they do or how they help us.
  url: https://urltosponsor.com
```

In addition, after the second --- in the file, there is some other text that follows the normal formatting rules to describe other things that are not part of the list of sponsors.
The `{% include feature_row %}` is where the sponsors list will be inserted.

#### Contact

The contact form is very different than a normal file, because it has to be implemented in HTML.
As with the 404 page, but even moreso this time, if you need to change anything and can't get it to work, you should find a computer science student.

#### This document

This document can be found in README.md and is just the same as any of the other pages, except there is no header containing --- ... --- at the top of the file.

### Running on your own computer (for live updates)

It is very helpful to have the website regenerate every time you save a file so you can make sure everything works and looks how you want before you publish it.
There is a way to do this, which makes editing the website a lot easier.
These instructions assume you already have this Git repository cloned on your computer.

First, install the [Ruby](https://www.ruby-lang.org/en/downloads/) programming language.

Then, open a shell (PowerShell on Windows, Terminal.app on Mac, or almost any terminal on Linux), and run the following commands (inside the top directory of this Git repo):

```sh
gem install bundler:1.17.3
bundle install
```

Up to this point, everything only has to be done once to install everything to your computer.
Here on describes things you will have to do every time you want to start the development server on your computer so you can see the live updates.

As a reminder, you may want to pull changes before you start working to make sure you have the latest version.

Inside the Git repository in a shell, run the following command:

```sh
bundle exec jekyll serve
```

Once this has been started, if you do not see any error messages, the development website will be available [here](http://localhost:4000).

### When the site doesn't update

The easiest way to make sure the site updates is to edit the files while running a local server (see above section) so that you can make sure there are no errors in what you publish.
However, if you are not able to or something works on your computer but doesn't work on GitHub pages, you'll be able to see that [here](https://github.com/final-frontier-aerospace/final-frontier-aerospace.github.io/settings), under the section titled "GitHub Pages."

Additionally, the CloudFlare setup will cause the public website to lag behind this repository by about three hours, which can be overridden temporarily by turning on development mode in the CloudFlare dashboard.
Without turning on development mode, if it hasn't been three hours yet, that is most likely why the site hasn't updated yet.

### Fixing DependaBot Alerts

First, install the [Ruby](https://www.ruby-lang.org/en/downloads/) programming language.

Then, open a shell (PowerShell on Windows, Terminal.app on Mac, or almost any terminal on Linux), and run the following commands (inside the top directory of this Git repo):

```sh
gem install bundler:1.17.3
```

Up to this point, everything only has to be done once to install everything to your computer.
Here on describes things you will have to do every time you want to fix existing DependaBot alerts.

Inside the Git repository in a shell, run the following command:

```sh
bundle install
bundle update
bundle exec jekyll serve
```

Then, go [here](http://localhost:4000) and verify the website looks correct.
Finally, commit the changes to the `Gemfile.lock` and push to fix the alerts.

### Documentation for tools used

 * [Jekyll](https://jekyllrb.com/docs/), the tool that generates the website from these files
 * [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/), the theme used with Jekyll
 * [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), the way to format things in pages
 * [GitHub Pages](https://help.github.com/en/articles/using-jekyll-as-a-static-site-generator-with-github-pages), the place the website is hosted
 * [Cloudflare](https://www.cloudflare.com/), the tool used for DNS
