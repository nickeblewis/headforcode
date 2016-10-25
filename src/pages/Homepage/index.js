import React, { Component } from 'react'
import Page from '../../layouts/Default'
import Terminal from '../../components/Terminal'
import Button from '../../components/Button/Button'
import terminalCommands from './terminalCommands'
import sparkle from '../../assets/images/home_sparkle.png'
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
                  <div className={styles.tagline}>
                    Learn the latest tricks of the web trade
                  </div>
                  <img ref='sparkle' className={styles.sparkle} src={sparkle} role='presentation' />
                  <Terminal commands={terminalCommands} />

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
                        href='/courses/javascript'
                      >
                        <span className={styles.ctaInner}>
                          <Svg svg={docsSvg} cleanup />
                          <span className={styles.ctaText}>
                            READ THE DOCS
                          </span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Page>
    )
  }
}
