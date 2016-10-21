import React, { Component, PropTypes } from 'react'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import {addScript, removeScript} from '../../utils/manageScripts'
import Page from '../../layouts/Default'
import PagesList from '../../components/PagesList'

const numberOfLatestPosts = 6
const isClient = typeof window !== 'undefined'

export default class CommunityPage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  componentWillMount () {
    if (isClient) {
      addScript('//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js')
    }
  }
  componentWillUnmount () {
    if (isClient) {
      removeScript('//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js')
      delete window.jQuery
    }
  }

  render () {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: 'Post' },
      sort: 'date',
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)

    return (
      <Page {...this.props}>
        <h2>{"Latest resources"}</h2>
        <PagesList pages={latestPosts} />
      </Page>
    )
  }
}
