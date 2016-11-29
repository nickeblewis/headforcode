# HeadForCode Site

Uses react, react-router, redux and [Phenomic](https://github.com/MoOx/phenomic) under the hood.

# Setup

**1. Install dependencies**

```bash
$ npm install
```

Next you will need to change the values in `src/_config.js` with your correct credentials, if you are setting up a different site.

**2. Run development server locally**

```bash
$ npm start
```

**3. Build for production**

```bash
$ npm run build
```

If your `npm run build` succeeds locally you can go ahead and push up to a branch. This will automatically publish a live subdomain preview of your changes.

---

## Publishing Updates to HeadForCode.com

We are using [netlify](http://netlify.com) to distribute the site. It pushes any changes made to the `master` branch to the live headforcode.com site.

So, whenever making changes to the site, it's important to do those on branches and submit a pull request for us to merge into master.

Make sure `npm run build` works locally or the build in netlify's CI/CD will fail and the updates won't be visible on the site.


## Adding Custom Scripts

To add custom scripts to page templates you will need to use React Helmet

```js
import Helmet from 'react-helmet'
<Helmet
   script={[
      {'src': 'http://nicklewis.net/wp-content/themes/default/js/prism.js', 'type': 'text/javascript'}
   ]}
   link={[
      {'rel': 'stylesheet', 'href': 'http://nicklewis.net/wp-content/themes/default/css/prism.css'},
   ]}
 />
```

## Learning more about how this website works

Many of the folders in this project contain further README.md files, much like this one. These files are written to help you understand how this site works 
and how you can modify it, the workflow to use, how we conduct the process of code reviews etc. Many of the JS files are commented too.

## Other reading and online resources

Phenomic
ReactJS on Facebook
Algolia
Google Analytics
Auth0
serverless
Markdown

## Roadmap

### Homepage

- TBD

### Reference

- The main focus of the site to start with

### Blog

- Coming later

### Courses

- To be designed

### Newsletter

- Will require a signup, see one of the other guys on Phenomic who has done this under their showcases page
- Which service should we hook this up with?

# A whole bunch of TODOs

* Investigate how we use Google Analytics with our phenomic based sites
* Investigate how we can incorporate advertising
* Investigate the various plugins we can develop in React for these sites
* https://marcustisater.github.io/
    * I may rebuild headforcode using newest Phenomic
* jeet.gs
* Currently also updating the Research pages, maybe the two should be amalganated??


REFINE

* How about generation of side indexes? I want to be able to keep on adding masses of content and be able to find it with ease
    * Getting Algolia up and running would be very handy in this regard!
    * I recently supplied my website details and therefore we could now download the plugin for this??

# Lets begin...
We are currently working on a range of on-line learning modules that aim to keep you, the busy web developer, up-to-date with the new technologies of our industry. It can be hard work keeping up with it all at the best of times. So we are designing the application within this website with as much care as we can. It should help you not just learn what you are looking to learn but to help you "queue up" future lessons. So consider it a teacher who gets to know you and whom can suggest what you perhaps should learn next.

We also aim to provide a means of helping you identify frameworks and libraries that are on the change. How many times have you gone back to take a project further, only to realise that it's dependencies have changed? You are currently using v0.12.1 when there is actually now a v6.5.21!!!

These things catch us out all of the time. We spend our time learning as many of the new tricks as we possibly can. We are busy too but we are focussed on helping you!

# What we are looking into

## Technologies

* scaphold.io
* [https://howtonode.org/hello-node](https://howtonode.org/hello-node)
* Serverless (AWS Lambda etc)
* https://www.netlify.com/blog/2016/10/13/serverless-jam---a-serverless-framework-tutorial-part-2/
* https://themeforest.net/item/educationpress-complete-education-template/17971530?s_rank=1

## Practices

TFS processes

* https://www.visualstudio.com/en-us/docs/work/guidance/agile-process
* https://www.visualstudio.com/en-us/docs/work/guidance/agile-process-workflow

# Coding can be complex! 
One of the reasons I founded H4C was to spend time and a significant amount of it too gaining an understanding of how modern day 
development philosophies work and quite literally write about it in order to become a thought leader in the industry. Through learning 
we improve our skills and we want to share this with others.

By developing a range of courses that you can follow online, some short, ideal for fitting into your working day and others you may 
need to spread across longer periods of times.

## CycleJS
Exploration and gaining an understanding of the CycleJS library....

## React
## Redux
Redux same as Rx?? Hmmm not quite and here is a greta article explaining

http://qiita.com/kimagure/items/a534d149cd9176d34cc1

## Rx
## Immutable
https://facebook.github.io/immutable-js/

The general idea behind immutable data is that it can't be changed once created and 
we shall explore it in more depth both in isolation and together with other libs.

## GraphQL

## Apollo

http://www.apollostack.com/

## New interests

* http://apigee.com/about/developers
* https://www.algolia.com/doc/guides/indexing/import-synchronize-data/javascript

etc

## Figma

https://www.figma.com/ now this does look very interesting indeed, it is a collaborative design tool for teams. Dan and I could put this to great use given half the chance.

## TODOs

- Can I hook up the auth redux to work? What work is involved? There may be a good example under the showcase page where on guy has built a site with a newsletter signup? Serverless?
- Start building a React UI library as part of H4C
- See how I could create GraphQL micro-services for the site?
- Demonstrate how an image library could be built  
- Fix the navigation "courses" becomes "Reference"
- The second button down likewise
- The "framework" page needs to be changed to show a breakdown of what lies under our reference folder and if possible a list of the articles under each??? Or recent articles? Something more dynamic  