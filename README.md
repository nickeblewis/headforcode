# HeadForCode Site

Uses react, react-router, redux and [Phenomic](https://github.com/MoOx/phenomic) under the hood.

This site is 100% serverless! Wooooooo!

- [See the site](https://serverless.com/)
- [Contribute to the blog](https://github.com/nickeblewis/headforcode)

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

## playing with branches
Nick woz 'ere innit!
rwerewrwerwerwerr