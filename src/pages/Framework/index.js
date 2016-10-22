import React from 'react'
import Page from '../../layouts/Default'
import styles from './Framework.css'
import Button from '../../components/Button/Button'

export default class PartnersPage extends React.Component {

  render () {
    return (
      <Page {...this.props} >
        <br />
        <div className={styles.header}>
          <h1 className='center' style={{marginBottom: '20px'}}>What sets HeadForCode apart from other online mentoring services?</h1>
          <p className='center' style={{marginBottom: '20px'}}>
            We all lead busy lives these days and if like us you work in the modern day software development business, typically spending most of your time building
            Web and Mobile Apps, you will know how challenging it can be to stay on top of modern day trends. Our Mentors are mostly contractors, who have been
            working in the industry for a long time and we have the experience to help our peers up-skill fast.
          </p>
        </div>
        {}
        <iframe className='center' src='https://player.vimeo.com/video/186516527?color=FFD734&byline=0&portrait=0' width='640' height='360'
          frameBorder='0' webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
        <p className='center' style={{marginTop: '20px', marginBottom: '10px'}}>
          We also help businesses develop web based apps to leverage their data and other online tools in a cost effective and considered approach, that
          many find quite enlightening.
        </p>
        <div className={styles.button}>
          <Button
            className={styles.button}
            kind='black'
            href='/courses/dandavis/'>
            Get Started
          </Button>
        </div>
        <h2 className={styles.header} style={{marginBottom: '20px', marginTop: '50px'}}>
          Why register for HeadForCode?
        </h2>
        <div className={styles.componentBox}>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/flash.svg' />
            <h3>Move Fast</h3>
            <p>Provision and deploy a REST API, data pipe-line, or one of many other use cases in minutes.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/signs.svg' />
            <h3>Simplicity</h3>
            <p>Our CLI makes it simple to manage and build a serverless architecture by abstracting away provider-level complexity.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/time-is-money.svg' />
            <h3>100% Utilization</h3>
            <p>Pay when your code runs, so you never have to worry about paying for idle server time.
            </p>
          </div>
        </div>
        <div className={styles.componentBox}>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/handshake.svg' />
            <h3>Collaboration</h3>
            <p>We provide a flexible application structure for easy management of code, resources, and events across large projects & teams.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/profile.svg' />
            <h3>Community</h3>
            <p>Serverless is an MIT open-source project, actively maintained by a vibrant and engaged community of developers.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/controls.svg' />
            <h3>Infinite Scaleability</h3>
            <p>Framework users are reacting to billions of events per month on AWS Lambda infrastructure.
            </p>
          </div>
        </div>
        <div className={styles.button}>
          <Button kind='black' href='https://serverless.com/framework/docs/guide/'>
          Get Started
          </Button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </Page>
    )
  }
}
