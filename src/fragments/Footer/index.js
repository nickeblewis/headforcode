import React, { Component } from 'react'
// import FeedbackModal from '../../fragments/FeedbackModal'
import styles from './index.css'

export default class Footer extends Component {
  render () {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href={"https://headforcode.com"} className={styles.link}>
            <span className={styles.reference}>
              {"HeadForCode © 2016"}
            </span>
          </a>
        </div>
      </footer>
    )
  }
}
