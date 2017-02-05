---
title: Week 6
layout: Doc
---

## Monday 7th February

* Vinay's email, please respond to him and make sure the things he was expecting are in hand first and foremost. I know you were working on a few things for your College work at the end of last week, so please let me know. If you are stuck with anything let me know.
* I have updated the Walk App, see the section below for an update on it

### The Walk App has been updated

First of all you will need to ensure that you have no pending changes for your copy of the __walkapp__ and next you need to switch to the Master branch. You can do so from your __Git Bash__ 

``` bash
$ cd proj/walkapp
$ git checkout master
$ git pull
```

I have added some new packages to the __package.json__ file, which means you need to run another npm install

``` bash
$ npm install
```

or perhaps yarn install if you have that

Then run the app using either npm or yarn

``` bash
$ npm start
```

You will see a nice new screen that this time has been built using Bootstrap and if you add "/photos" to the end of the URL, you will a new photo library style page appear.