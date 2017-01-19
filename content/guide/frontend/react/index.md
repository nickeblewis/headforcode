---
title: ReactJS
layout: Doc
---

## Creating a simple single page application

As they say on the official [React](https://facebook.github.io/react/docs/installation.html) Site, using the [Create React App](https://github.com/facebookincubator/create-react-app) is the best way to starting a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

So here it goes, 4 lines in your terminal to get going!

``` bash
npm install -g create-react-app
create-react-app hello-world
cd hello-world
npm start
```

It is as simple as that!

It is worth noting that [Create React App](https://github.com/facebookincubator/create-react-app) doesn't setup any form of back-end logic or databases for you; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses [webpack](https://webpack.js.org/), [Babel](http://babeljs.io/) and [ESLint](http://eslint.org/) under the hood, but configures them for you.