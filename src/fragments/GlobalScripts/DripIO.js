import React, { Component, PropTypes } from 'react'
import { isClientSide } from '../../utils'

// DRIP plugin
if (isClientSide()) {
  var _dcq = _dcq || []
  var _dcs = _dcs || {}
  _dcs.account = '9410191'
  window._dcq = _dcq
  window._dcs = _dcs
}

class DripIO extends Component {

  render () {
    return (
      <div>
        <script async src='//tag.getdrip.com/9410191.js'></script>
      </div>
    )
  }
}

DripIO.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  params: PropTypes.object.isRequired,
}

export default DripIO
