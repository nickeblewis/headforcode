import React from 'react'
import Helmet from 'react-helmet'
import { isClientSide } from '../../utils'

/*
script={[
  {'src': 'https://cdn.auth0.com/js/lock/10.4/lock.min.js', 'type': 'text/javascript'},
]}
 */

// DRIP plugin
if (isClientSide()) {
  var _dcq = _dcq || []
  var _dcs = _dcs || {}
  _dcs.account = '9410191'
  window._dcq = _dcq
  window._dcs = _dcs
}

export default class HeadTag extends React.Component {
  render () {
    return (
      <div>
        <style>
          {"@-ms-viewport { width: device-width; }"}
        </style>
        <Helmet
          meta={[
            { property: 'og:site_name', content: process.env.SITENAME },
            { name: 'twitter:site', content: `@${process.env.TWITTER}` },
            {
              name: 'google-site-verification',
              content: '1HdFnJaYYEiONgCRl3fj7lQobYY4uXPe5L2-sTgNzKQ'
            },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ]}

          script={[
            { async: true, src: '//tag.getdrip.com/9410191.js' }
          ]}
        />
      </div>
    )
  }
}
