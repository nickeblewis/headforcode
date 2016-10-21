/**
 * Project config
 * NOTE: No private data/keys should be stored here.
 */
module.exports = function siteConfig (isProduction) {
  return (
    {
      SITENAME: process.env.SITENAME || 'headforcode',
      TWITTER: process.env.TWITTER || 'headforcode',
      GITHUB: process.env.GITHUB || 'nickeblewis',
      GOOGLE_ANALYTICS_UA: (isProduction) ? 'UA-86079311-1' : null,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'eYJPvZumARLthBXJgMpeHsOXx9DvA42Y',
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'headforcode.eu.auth0.com',
      ALGOLIA_ADMIN: process.env.ALGOLIA_ADMIN || 'db43bbe2cb26bfa46fe72a5cd2c26213',
      API: {
        ERROR: 'https://h413evrxuk.execute-api.us-west-2.amazonaws.com/dev/report',
        NEWSLETTER: 'https://3upqirwiuc.execute-api.us-west-2.amazonaws.com/dev/subscribe'
      }
    }
  )
}
