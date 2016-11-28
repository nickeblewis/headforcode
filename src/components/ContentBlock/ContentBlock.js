import React, {Component, PropTypes} from 'react'
import styles from './ContentBlock.css'

const propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  image: PropTypes.string,
}
export default class ContentBlock extends Component {

  render () {
    const { color, style, title } = this.props
    const colorStyle = styles[color] || ''
    return (
      <div className={'contentBlocks'}>
        <section style={style} className={styles.wrapper + ' ' + colorStyle}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              {this.props.children}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

ContentBlock.propTypes = propTypes
