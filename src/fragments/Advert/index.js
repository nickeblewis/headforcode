import React, {PropTypes} from 'react'
import Block from '../../components/Block'
import GoogleAd from 'react-google-ad'

const Advert = (props) => {
  return (
    <Block className={props.className} style={props.style}>
      <GoogleAd client={props.client} slot={props.slot} format={props.format} />
    </Block>
  )
}

Advert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  client: PropTypes.string,
  slot: PropTypes.string,
  format: PropTypes.string,
}
export default Advert
