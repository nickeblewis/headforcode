---
title: GraphQL
layout: Doc
---

GraphQL was created by a team of Engineers at Facebook to tackle some of the shortcomings that some have experienced with traditonal RESTful APIs. In short GraphQL works just like any other API but with just one endpoint and a genius query language that many front end engineers will find easy to pick up from the beginning...


[Open the GraphQL Playground](https://api.graph.cool/simple/v1/cixraxev60e4c0121krsia44h?query=query%20%7B%0A%20%20allPosts(orderBy%3A%20createdAt_DESC)%20%7B%0A%20%20%20%20imageUrl%0A%20%20%7D%0A%7D)

You will see on the right hand side some code:

``` javascript
query {
  allPosts(orderBy: createdAt_DESC) {
    imageUrl
  }
}
```
TODO - this is a work in progress, please come back soon or subscribe to our newsletter to be kept up-to-date.