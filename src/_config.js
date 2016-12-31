/**
 * Project config
 * NOTE: No private data/keys should be stored here.
 */

/**
 * TODOS
 * - The API section is not valid for HeadForCode but it would be great to build our own newsletter app
 */
module.exports = function siteConfig (isProduction) {
  return (
    {
      SITENAME: process.env.SITENAME || 'headforcode',
      TWITTER: process.env.TWITTER || 'headforcode',
      GITHUB: process.env.GITHUB || 'nickeblewis',
      GOOGLE_ANALYTICS_UA: (isProduction) ? 'UA-86079311-2' : null,
      GOOGLE_ADSENSE_CLIENT: process.env.GOOGLE_ADSENSE_CLIENT || 'ca-pub-7074532723193891',
      GOOGLE_ADSENSE_CLIENT: process.env.GOOGLE_ADSENSE_SLOT || '7960527967',
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'eYJPvZumARLthBXJgMpeHsOXx9DvA42Y',
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'headforcode.eu.auth0.com',
      ALGOLIA_ADMIN: process.env.ALGOLIA_ADMIN || 'db43bbe2cb26bfa46fe72a5cd2c26213',
      API: {
        ERROR: 'https://headforcode.com/api',
        NEWSLETTER: 'https://headforcode.com/api'
      }
    }
  )
}
