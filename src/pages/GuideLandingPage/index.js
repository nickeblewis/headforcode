import React from 'react'
import Page from '../../layouts/Default'
import styles from './GuideLandingPage.css'
import { Link } from 'react-router'

export default class GuideLandingPage extends React.Component {

  render () {
    return (
      <Page {...this.props} >
        <br />
        <div className={styles.header}>
          <h1 className='center' style={{marginBottom: '20px'}}>Learning the latest web/mobile technologies?</h1>
          <p className='center' style={{marginBottom: '20px'}}>
            We all lead busy lives these days and if like us you work in the modern day software development business, typically spending most of your time building Web and Mobile Apps, you will know how challenging it can be to stay on top of modern day trends. Our Mentors are mostly contractors, who have been working in the industry for a long time and we have the experience to help our peers up-skill fast.
          </p>
        </div>
        <p className='center' style={{marginTop: '20px', marginBottom: '10px'}}>
          We also help businesses develop web based apps to leverage their data and other online tools in a cost effective and considered approach.
        </p>
        <h2 className={styles.header} style={{marginBottom: '20px', marginTop: '50px'}}>
          The topics we cover...
        </h2>
        <div className={styles.componentBox}>
          <div className={styles.component}>
            <Link to='/guide/frontend'>
              <h3>Front-end</h3>
            </Link>
            <p>Learn more about the key front-end skills such as HTML, CSS and React plus others
            </p>
          </div>
          <div className={styles.component}>
            <Link to='/guide/data'>
              <h3>Data &amp; APIs</h3>
            </Link>
            <p>We focus on how you can use a variety of microservices and their APIs to build the applications of today and the future
            </p>
          </div>
          <div className={styles.component}>
            <Link to='/guide/mobile'>
              <h3>Mobile</h3>
            </Link>
            <p>The users of the world are becoming more and more dependent on mobile devices. We take a look at how this can be achieved.
            </p>
          </div>
        </div>
      </Page>
    )
  }
}
