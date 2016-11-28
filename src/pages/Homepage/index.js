import React, { Component } from 'react'
import Page from '../../layouts/Default'
import ContentBlock from '../../components/ContentBlock'
import Button from '../../components/Button/Button'
import { Link } from 'react-router'
import styles from './Homepage.css'
import playSvg from '../../assets/icons/play.svg'
import docsSvg from '../../assets/icons/book2.svg'
import { addAnimationEvent, removeAnimationEvent } from '../../utils/animations'
import Svg from 'react-svg-inline'

export default class Homepage extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      show: true
    }
    this.animationCallback = this.animationCallback.bind(this)
  }
  componentDidMount () {
    addAnimationEvent(this.refs.animDiv, 'AnimationEnd', this.animationCallback)
  }
  componentWillUnmount () {
    removeAnimationEvent(this.refs.animDiv, 'AnimationEnd', this.animationCallback)
  }
  animationCallback (event) {
    const node = this.refs.sparkle
    setTimeout(function () {
      node.style.display = 'block'
    }, 100)
  }
  render () {
    return (
      <Page {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.bg}>
              <div className={styles.hero}>
                <div className={styles.heroLeft + ' fadeIn fadeInShort'}>
                </div>
                <div ref='animDiv' className={styles.heroRight + ' zoomxIn zoomInxLong'}>
                  <div className={styles.buttons}>
                    <div className={styles.cta}>
                      <Button
                        kind='black'
                        href='/framework'
                      >
                        <span className={styles.ctaInner}>
                          <Svg svg={playSvg} cleanup />
                          <span className={styles.ctaText}>
                            LEARN MORE
                          </span>
                        </span>
                      </Button>
                    </div>

                    <div className={styles.cta}>
                      <Button
                        kind='black'
                        href='/courses/dandavis'
                      >
                        <span className={styles.ctaInner}>
                          <Svg svg={docsSvg} cleanup />
                          <span className={styles.ctaText}>
                            Courses
                          </span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <ContentBlock title='Researching' image='./marketresearch.jpg' color='yellow'>
            <p>
              We are constantly researching the latest technologies, ideas and trends for web development.
            </p>
            <p>
              <Link to='/research'>
                Research Articles
              </Link>
            </p>
          </ContentBlock>
          <ContentBlock title='Consulting' color='tan'>
            <p>
              We have a wealth of knowledge that we draw upon when Clients come to us with a project that needs development.
            </p>
            <p>
              <Link to='/contact'>
                Contact Us
              </Link>
            </p>
          </ContentBlock>
          <ContentBlock title='Mentoring' color='yellow'>
            <p>
              Francis Bacon once said that, "Knowledge is power" and that has never been more relevant than now.
            </p>
            <p>
              <a href='/courses' target='_blank'>
                Take a look at our latest courses
              </a>
            </p>
          </ContentBlock>
        </div>
      </Page>
    )
  }
}
