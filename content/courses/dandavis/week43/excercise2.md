---
title: Excercise 2 - Removing unwanted stuff
layout: Doc
---

# Excercise 2 - Removing unwanted stuff

## Pre-flight checks!

First of all let us check that we are in the right folder and in the right branch

```bash
$ cd /c/proj/headforcode
$ git status
```

We should be in the Master branch, the **git status** command will inform us of this and you can also tell form the Terminal window too. If we are not and you only need to do this, if you are in an alternative branch:

```bash
$ git checkout Master
```

Will make sure we are back in the right place.

## We are about to pick up on a piece of work

Let's imagine I've given you a piece of work to do, it could be an enhancement, a bug fix or something new. Perhaps you have spotted something that isn't right and you want to change it. In either case, it is a great idea to create a new branch, so lets do that. I am going to give you a little fix to make to this site.

```bash
$ git branch "removestuff"
```

## Making changes to the homepage

The HomePage needs some work, it looks good but we are not Serverless, we are going to strip out their stuff and swap for our own. Let's also take a top-down approach to this task.

### Task 1 - Remove the Serverless logo from the blue area

Just beneath the navigation header at the top of the page, is a blue-ish section that features a logo at the top. We shall swap this for our own HeadForCode logo that you designed. 

First of all, let me show you around the code, so that you can begin to understand