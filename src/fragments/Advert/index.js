import React, {PropTypes} from 'react'
import Block from '../../components/Block'
import GoogleAd from 'react-google-ad'

const Advert = (props) => {
  return (
    <Block className={props.className} style={props.style}>
      <GoogleAd client='ca-pub-7074532723193891' slot='7960527967' format='auto' />
    </Block>
  )
}

Advert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}
export default Advert
