---
title: MERN 
layout: Draft
date: 2016-11-07
---

MERN stands for

- Mongo
- Express
- React
- Node

Quite simply we can build web apps that are built out of the above tools/technologies in an opinionated way. Don't worry if you have little experience in any of the above, for we shall break this down piece by piece in a multi-part blog series. The first thing you will want to do is get the pre-requisites installed.

## Have you got Node installed?

You will need to ensure that you have Node Installed along with NPM, this though is beyond the scope of this article, as we shall be focussing on getting MERN itself up and running. The best place to go to learn more about installing node is [http://nodejs.org](http://nodejs.org)

## Step 1 - Make sure you have MongoDB

You will need to download the latest version via [https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.2.10-signed.msi/download](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.2.10-signed.msi/download)

- This will start downloading the Windows version straight away and you don't need to fill in the registration form, ignore that
- Once downloaded, double click on the package to open and run itself
- You will be prompted by Windows to approve the installation
- You will be prompted whether you wish to install a complete or custom version, I selected the complete option
- Accept the license agreement
- Once it has installed it will close down and nothing will launch straight away, there are some other steps to complete

Launch a command prompt from Windows Start menu and issue the following command:

``md \data\db`` [Enter]

This creates the database file required by MongoDB to be able to run

Next to run the MongoDB database, issue the following from the same command prompt terminal window:

``"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe"``

Now minimise the command prompt terminal window, so that the database can continue to run.

Q: "Will I need to do this every time?"

A: Yes but there is a way we can configure it so that it runs every time Windows starts