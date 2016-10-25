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

        <br />
        <br />
        <br />
        <br />
      </Page>
    )
  }
}
