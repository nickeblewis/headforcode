import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { BodyContainer } from 'phenomic'
import Page from '../Default'
import FixedSocialButtons from '../../components/FixedSocialButtons'
import BetaCTA from '../../fragments/BetaCTA'
import AuthorCTA from '../../fragments/AuthorCTA'
import Svg from 'react-svg-inline'
import gitHubSvg from '../../assets/icons/github.svg'
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
    const githubURL = 'https://github.com/serverless/blog/edit/master/posts' + head.gitLink
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
            <div className={styles.editLinkWrapper}>
              <span className={styles.editLink}>
                <Svg svg={gitHubSvg} cleanup />
                <a target='_blank' href={githubURL}>
                  Edit this post on github
                </a>
              </span>
            </div>
            <BetaCTA buttonText='Get early access' />

            <AuthorCTA style={{marginTop: '20px'}} />
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
