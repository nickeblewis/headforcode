---
title: Lesson 2 - Creating a branch
layout: Doc
---

# Lesson 2 - Creating a branch

## Let's talk about Git in more depth

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. In any case I recommend at some point 
visiting [https://try.github.io/levels/1/challenges/1](https://try.github.io/levels/1/challenges/1) to learn more about it or take a look at what they've got on CodeAcademy.

When you cloned the HeadForCode project in [Lesson 1](lesson1) it will have not only created a new folder with your project files in it but it will also have created a Git repository as part of that 
folder. This is why when you change into the folder using the 'cd' command from, let's say the **proj** folder just above it, the command prompt will look like:

```bash
/c/proj/headforcode (master)
```

Normal directories don't show the master bit on the end. It is this piece of information that tells you which brancch you are in, as you may have already guessed, you are currently working on 
the master. Your local has one of these from the first moment you either manually create the Git repository (using **git init**) locally or you clone a project, as you did in [Lesson 1](lesson1).
The remote server, known as "Origin" and effectively our https://github.com/nickeblewis/headforcode project will also have a matching branch of master.

So when you wun a **git push** command the changes you will have added using **git add .** followed by **git commit -m [message]** will get pushed and marged into the remote branch of the same name.

This takes a little bit of getting used to but once you've done it a few times, it will click and then it becomes easy to use.

So what we are going to do next is create a new branch but why create branches in the first place?

### The purpose of branches

First up, it is bad practice in most projects where more than one person is working on the same project. Hence creating a branch for the piece of work that you are doing makes sense. This is for 
two reasons.

1. You can always switch between your branch and the master, useful if you work isn't going quite right and you want to switch to the "working version" to compare
2. One person may be working on re-styling the site based on a company re-brand and the other may be fixing some urgent bugs. You can work independently of eachother without the worry of causing conflicts
3. You may be working on fixing one thing and then are asked to work on something else, you can switch back to the master branch, leaving your incomplete work intact and safe where it is.

These are just some of the great reasons for branching. In our case, it will simply be so that we can both work on the same project and not worry about treading on eachothers toes. 

### Lets crack on and create a branch

So to create a branch, make sre that you are in the main folder of the headforcode project:

```bash
$ cd /c/proj/headforcode
```

Let's do a quick status check on our git repository

```bash
$ git status
```

This will inform you that **Your branch is up-to-date with 'origin/master'.** and that is to be expected, as we haven't yet done anything with the project, so far we have cloned it from GitHub, 
installed the NPM modules and started it to check that it runs.

Now we are going to create our first branch and names should be all lower-case, have no spaces etc:

```bash
$ git checkout -b "mynewbranch"
```

You should see a message saying **Switched to a new branch 'mynewbranch'** at this stage and that is great.

So at this moment in time, your new branch only exists on your machine and we should make some minor changes to a file using Visual Studio Code to see what happens. 

1. Let's launch Visual Studio Code via Windows and then open your **/c/proj/headforcode** project.
2. Find the README.md file in the root directory 
3. Make an edit to it, just add your name somewhere or something like that




