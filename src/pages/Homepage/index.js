import React, { Component } from 'react'
import Page from '../../layouts/Default'
import ContentBlock from '../../components/ContentBlock'
import Button from '../../components/Button/Button'
import { Link } from 'react-router'
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
                        href='/reference/dandavis'
                      >
                        <span className={styles.ctaInner}>
                          <Svg svg={docsSvg} cleanup />
                          <span className={styles.ctaText}>
                            Reference
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
              One aspect of being a developer, is that you, though you may not realise it all of the time, is that you are a Researcher. We spend a lot of time exploring ways of solving problems.
            </p>
            <p>
              <Link to='/research'>
                Research Articles
              </Link>
            </p>
          </ContentBlock>
          <ContentBlock title='Consulting' image={consultants} color='white'>
            <p>
              We our passionate about understanding our clients, learning about the problems you need solutions for, helping you achieve what you need to.
            </p>
            <p>
              <Link to='/contact'>
                Contact Us
              </Link>
            </p>
          </ContentBlock>
          <ContentBlock title='Mentoring' image={mentors} color='white'>
            <p>
              Francis Bacon once said that, "Knowledge is power" and that has never been more relevant than now. It is important for us to share what we know and hence this website has great ambitions to become a digital reference book offering a combination of both free and premium resources.
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
