import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { BodyContainer } from 'phenomic'
import Page from '../Default'
import FixedSocialButtons from '../../components/FixedSocialButtons'
// import BetaCTA from '../../fragments/BetaCTA'
import Advert from '../../fragments/Advert'
import styles from './Post.css'
import disqus from './disqus-script'
import GooglePlacesSuggest from 'react-google-map'

class GMap extends Component {
  state = {
    search: '',
    selectedCoordinate: null,
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSelectSuggest = (suggestName, coordinate) => {
    this.setState({ search: suggestName, selectedCoordinate: coordinate })
  }

  render () {
    const { props } = this
    const { head, body } = props
    const pageDate = head.date ? new Date(head.date) : null

    const postMeta = (
      <header>
        {pageDate &&
          <time key={pageDate.toISOString()}>
            {pageDate.toDateString()}
          </time>}
      </header>
    )

    const markdownContent = (
      <BodyContainer>
        {body}
      </BodyContainer>
    )
    const { search } = this.state
    return (
      <Page {...props} className={styles.postPage} >
        <FixedSocialButtons
          url={`https://serverless.com/${this.props.__url}`}
          title={head.title}
        />
        <div className={styles.postWrapper}>
          <div className={styles.content}>

            <h1>{head.title}</h1>
            <div className={styles.postMeta}>
              {postMeta}
            </div>
            <GooglePlacesSuggest onSelectSuggest={this.handleSelectSuggest} search={search}>
              <input
                type='text'
                value={search}
                placeholder='Search a location'
                onChange={this.handleSearchChange}
              />
            </GooglePlacesSuggest>
            {markdownContent}
          </div>

          <div className={styles.sidebar}>
            <Advert style={{marginTop: '20px'}} />
          </div>
        </div>
        <div className={styles.comments} id='disqus_thread'></div>
        <Helmet script={[{'type': 'text/javascript', 'innerHTML': disqus}]} />
      </Page>
    )
  }
}

Vimeo.propTypes = {
  head: PropTypes.object.isRequired,
  __url: PropTypes.string,
}

export default GMap
