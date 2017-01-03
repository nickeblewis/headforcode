import React from 'react'
import Page from '../../layouts/Default'
import Form from '../../components/Form'

import TextInput from '../../components/TextInput'
/* import styles from './Contact.css'*/

export default class Contact extends React.Component {

  render () {
    return (
      <Page {...this.props} >
        <h2>Contact Us</h2>
        <p>We would love to hear from you, so please drop us a line using the form below. We shall get back to you as soon as we possibly can.
        </p>
        <Form>
          <TextInput
            name='fullname'
            placeholder='Enter your Full Name' />
          <TextInput validation={'isEmail'}
            name='email'
            placeholder='Enter your email' />
          <textarea name='body' rows='20' cols='100'>

          </textarea>
          <button type='submit' name='Send'>
            Send
          </button>
        </Form>
      </Page>
    )
  }
}
