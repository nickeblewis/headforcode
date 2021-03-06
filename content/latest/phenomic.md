---
path: content/posts/phenomic-rocks.md
title: Phenomic rocks!
layout: Post
date: 2016-12-31
author: nickeblewis
thumbnail: 'https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/js.png'
---

I have for years been quite happy building blog based websites with tools such as Wordpress, Drupal, Blogger and so on but it wasn't until earlier this year that I really began to explore how sites can be built using static files. I found a whole bunch of tools such as Jekyll, Hugo, Gatsby, Metalsmith and Phenomic. All of which abandon the traditional PHP server and MySql database in favour of plain old static files. Once I had cottoned on to the concept, I was totally hooked, why hadn't I entertained this method before? Well of course I had back in the old fashioned web days when everything was based on static HTML files!! Why have we gone back to old skool? Have we really gone back to the 90's or has Happy House grown up and become Jazz?

## Out with the old

I run a website simply called nicklewis.net and it is a classic Wordpress job which I have been running for domkeys of years now. However it is prone to being hit by XML-RPC attacks and it needs to be updated frequently for the sake of security patches. Wordpress is great for what it does but much like other PHP based system, Drupal for example, it is quite hefty too. I mean to say that I prefer lean and mean code any day. I also like to "know the code" even if it isn't entirely my own. Let's face it these days, we all rely on "git clone" from the get go and adapt it to our own needs. So whilst mulling over the best solutions for our new website headforcode.com I took the brave decision to throw away the old tools and buy some shiny new ones... metaphorically speaking of course!

## Embracing the new

I spent a considerable length of time hunting for the right tools to use. I tried them all out and had fun doing so but I was keen to be able to use React, so my hunt came to an end, pretty much as soon as I cast my eyes for the first time upon Phenomic. It was the right tool for me and is supported by an active community of developers too. Their website is also really good with a great showcase page that led me to discovering some other great things at the time. I must admit that I used Serveless as a guideline for this site.

## For the love of Markdown

One of the biggest things I love about Phenomic is that you can write your articles (or content) using Markdown. I for example wrote this article on a flight from London to Malta. I have no internet here at 33,000 feet but I can save what I'm writing to my Surface Pro 4. I can later commit my code and then push it to Github. 

Having pushed, some internet magic happens, as a webhook fires up Netlify's deployment processes, headforcode is re-built and pushed onto their super-fact CDN network. 

It is so cool that I can write articles using the same code editor I use for writing my Javascript. I shall write more about my processes in future articles because I am a massive (obssessive even) fan of such things.

## Better security

I would also like to point out one of the biggest beneefits of this whole approach and that is security. Having no database nor web server means there is precious little opportunity for hackers to get into the system to wreak havoc. It is pretty much a closed door. This is largely due to the fact that everything is built up-front and deployed as static files.

## Don't worry, Be API

How do we handle search? At the time of writing this article, HeadForCode.com does not yet have a search facility but we will soon. We are planning to use Algolia. How the heck does it work though, if we have no database or any other form of normal server? The answer is, we use webhooks to trigger an index of the site instead. So when we push to GitHub, we also trigger a -re-index of the entire site. We will be adding a search widget to the site that then queries the index via an API service. It is fast and also places less overhead on the website itself, we let someone else take care of that for us.

We can use APIs for making our site dynamic and here are a few thoughts that we have on that:

* Content could be delivered using a service like Prismic, Contentful and others
* We can sell things using services like Snipcart
* In fact many other API based services will work

We shall be exploring the options available over the coming weeks and providing some tutorial content on how you can introduce them to your own projects :-)