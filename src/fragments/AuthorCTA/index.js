import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import Block from '../../components/Block'

const AuthorCTA = (props) => {
  return (
    <Block className={props.className} style={props.style}>
      <h3>
        Join the HeadForCode<br />Newsletter
      </h3>
      <p>We can help you learn what you need to know about, no fuss
      </p>
      <Link to='/blog/contribute/'>Learn More</Link>
    </Block>
  )
}

AuthorCTA.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}
export default AuthorCTA
