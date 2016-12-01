/* TODO - The number 07747792400 below is just temporary!! */
import React, { Component, PropTypes } from 'react'
/* import { isClientSide } from './utils'*/

class DripIO extends Component {

  render () {
    return (
      <div>
        <script async src='//tag.getdrip.com/07747792440.js'></script>
      </div>
    )
  }
}

DripIO.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  params: PropTypes.object.isRequired,
}

export default DripIO
