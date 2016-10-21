import React from 'react'
import AutoForm from 'react-auto-form'
import Page from '../../layouts/Default'
import styles from './Enterprise.css'
import submitForm from './form.js'

export default class PartnersPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      error: false,
      success: false,
    }
  }
  handleSubmit = (event, data) => {
    event.preventDefault()
    // console.log(event)
    // console.log(data)
    var that = this
    submitForm(data, function (err, data) {
      if (err) {
        that.setState({
          error: true
        })
        return false
      }
      that.setState({
        success: true
      })
    })
  }

  render () {
    let errorDiv
    if (this.state.error) {
      errorDiv = (
        <div className={styles.error}>Oops! Please fill out all the fields.</div>
       )
    }
    let successDiv
    if (this.state.success) {
      successDiv = (
        <div className={styles.success}>Thanks! Someone will be in touch shortly.</div>
       )
    }
    return (
      <Page className={styles.enterprise} {...this.props} >
        <h1 className={styles.header}>Serverless For The Enterprise</h1>
        <i className={styles.subHeader}>Enabling enterprise development teams to take advantage of all of the benefits of serverless arcitectures.</i>
        <div className={styles.box}>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/flash.svg' />
            <div className={styles.copy}>
              <h3>Serverless Architecture</h3>
              <p>Empower your development team to focus more time on solving business problems, less on operations, and to deploy faster than ever.</p>
            </div>
          </div>

          <div className={`${styles.component} ${styles.componentRight}`}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/network.svg' />
            <div className={styles.copy}>
              <h3>Event Driven Microservices</h3>
              <p>Keep units of deployment small, dramatically improve service discoverablity, and easily react to any event in your system.</p>
            </div>
          </div>

          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/controls.svg' />
            <div className={styles.copy}>
              <h3>Infinite Scalability</h3>
              <p>Sleep well at night knowing your serverless services can to scale to meet any demands that are placed on them.</p>
            </div>
          </div>
        </div>
        <h2 className={styles.header}>Want To Learn More?</h2>
        {errorDiv}
        {successDiv}
        <AutoForm onSubmit={this.handleSubmit} trimOnSubmit>
          <input required='true' name='name' placeholder='Name' />
          <input required='true' type='email' name='email' placeholder='Email' />
          <input name='company' placeholder='Company' />
          <span className={styles.feedbackSubmit}>
            <button kind='black' className={styles.btn}>
              Submit
            </button>
          </span>
        </AutoForm>
      </Page>
    )
  }
}
