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
        <h2 className={styles.header} style={{marginBottom: '20px', marginTop: '50px'}}>
          Why register for HeadForCode?
        </h2>
        <div className={styles.componentBox}>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/js.png' />
            <h3>JavaScript</h3>
            <p>is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/nodejs.png' />
            <h3>Node.JS</h3>
            <p>is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/mongodb.png' />
            <h3>MongoDB</h3>
            <p>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.
            </p>
          </div>
        </div>
        <div className={styles.componentBox}>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/react.png' />
            <h3>React</h3>
            <p>React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/htmlcss.png' />
            <h3>HTML/CSS</h3>
            <p>HTML (Hyper-text markup language) and CSS (Cascading Style Sheets) are the languages you can use to build and style websites.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/markdown.png' />
            <h3>Markdown</h3>
            <p>Markdown is a lightweight markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name.[8] Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
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
