import React, { Component, PropTypes } from 'react'
class GoogleAdsense extends Component {

  render () {
    return (
      <div>
        <script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
      </div>
    )
  }
}

GoogleAdsense.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  params: PropTypes.object.isRequired,
}

export default GoogleAdsense
