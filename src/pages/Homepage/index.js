import React, { Component } from 'react'
import Page from '../../layouts/Default'
import ContentBlock from '../../components/ContentBlock'
import Button from '../../components/Button/Button'
import styles from './Homepage.css'
import docsSvg from '../../assets/icons/book2.svg'
import { addAnimationEvent, removeAnimationEvent } from '../../utils/animations'
import Svg from 'react-svg-inline'
import researchers from '../../assets/images/iStock-505021766.jpg'
import consultants from '../../assets/images/iStock-492097416.jpg'
import mentors from '../../assets/images/iStock-505642128.jpg'

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
                          <span className={styles.ctaText}>
                            <h2>HeadForCode</h2>
                            <p>Code helps bring people and solutions together through technology. We have a wealth of experience in developing proven solutions that solve our everyday problems.</p>
                            <p>We research, consult and mentor developers and clients equally.</p>
                          </span>
                        </span>
                      </Button>
                    </div>

                    <div className={styles.cta}>
                      <Button
                        kind='black'
                        href='/business/bni'
                      >
                        <span className={styles.ctaInner}>
                          <Svg svg={docsSvg} cleanup />
                          <span className={styles.ctaText}>
                            Welcoming the BNI
                          </span>
                        </span>
                      </Button>
                    </div>
                    <div className={styles.cta}>
                      <Button
                        kind='black'
                        href='/guide/'
                      >
                        <span className={styles.ctaInner}>
                          <Svg svg={docsSvg} cleanup />
                          <span className={styles.ctaText}>
                            Learn how to Code
                          </span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <ContentBlock title='Research' image={researchers} color='white'>
            <p>
              One aspect of being a developer, is that you, though you may not realise it, are a Researcher. We spend a lot of our time exploring ways of solving problems. So much so, that at times one thing leads to another and keeping track of where you are in the grand scheme of things is hard. We want to help solve this problem.
            </p>

          </ContentBlock>
          <ContentBlock title='Consulting' image={consultants} color='white'>
            <p>
              We our passionate about understanding our clients, learning about the problems you need solutions for, helping you achieve what you need to get done. This is where we realise the time spent researching ways of doing things, pays off.
            </p>

          </ContentBlock>
          <ContentBlock title='Mentoring' image={mentors} color='white'>
            <p>
              We are working more frequently with other Developers, ranging from apprentices, through to highly experienced professionals. Most of these people face the same daily challenges as we do. Mentoring is a great way of helping people learn based on our own knowledge and experiences. In return we often learn quite a lot from the people we teach.
            </p>

          </ContentBlock>
        </div>
      </Page>
    )
  }
}
