---
title: ReactJS - Create React App
layout: Doc
---

## Creating a simple single page application

As they say on the official [React](https://facebook.github.io/react/docs/installation.html) Site, using the [Create React App](https://github.com/facebookincubator/create-react-app) is the best way to starting a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

So here it goes, 4 lines in your terminal to get going!

``` bash
npm install -g create-react-app
create-react-app hello-world
cd hello-world
yarnpkg start
```

It is as simple as that!

_Note: It can sometimes take a little while when running the create-react-app command first time round_

Hopefully that will all be up and running and you should see something that looks like this when you browse to [localhost:3000](http://localhost:3000):

![alt text](/assets/welcome-to-react.png "Title")

### Commands available

__yarnpkg start__

This command launches the development server and will by default run the application under port 3000 

__yarnpkg run build__

This command will build the application ready for deployment to production. All files are compiled into the _public_ folder.

__yarnpkg test__

This command runs all unit tests and will display a report to notify you of successes/failures. React uses the Jest framework for testing.

__yarnpkg run eject__

Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, there is no going back!

### Final notes

It is worth noting that [Create React App](https://github.com/facebookincubator/create-react-app) doesn't setup any form of back-end logic or databases for you; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses [webpack](https://webpack.js.org/), [Babel](http://babeljs.io/) and [ESLint](http://eslint.org/) under the hood, but configures them for you.