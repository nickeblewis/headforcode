import React, {PropTypes} from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import GoogleAdsense from './GoogleAdsense'
import SegmentIO from './SegmentIO'
import DripIO from './DripIO'

export default function GlobalScripts (props) {
  return (
    <div>
      <GoogleAnalytics {...props} />
      <div id='footerScripts'
        dangerouslySetInnerHTML={{__html: SegmentIO}}
      />
      <GoogleAdsense {...props} />
      <DripIO {...props} />
    </div>
  )
}
GlobalScripts.propTypes = {
  children: PropTypes.any
}
