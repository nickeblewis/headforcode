import React from 'react'
import Page from '../../layouts/Default'
import Form from '../../components/Form'
import Button from '../../components/Button'

import TextInput from '../../components/TextInput'

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
          <textarea name='body' rows='20' cols='135'>

          </textarea>
          <br />
          <Button type='submit' name='Send Message' text='Send Message' kind='yellow'>
            Send
          </Button>
        </Form>
      </Page>
    )
  }
}
