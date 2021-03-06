import React, { Component, PropTypes } from 'react'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import Page from '../../layouts/Default'
import {Link} from 'react-router'
// import BetaCTA from '../../fragments/BetaCTA'
import Advert from '../../fragments/Advert'
// import Newsletter from '../../fragments/Newsletter/Newsletter'
import defaultThumbnail from '../../assets/images/platform_4.gif'
import styles from './Latest.css'

const numberOfLatestPosts = 10
// const isClient = typeof window !== 'undefined'

export default class LatestPage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  renderLatestPreview (page, i) {
    let author = 'Nick Lewis'
    let avatarURL = 'https://avatars3.githubusercontent.com/u/440732?v=3&s=60'
    let thumbnail = defaultThumbnail

    if (page.authors) {
      // console.log('page.authors', page.authors)
    }
    if (page.draft) {
      return null
    }
    if (page.thumbnail) {
      thumbnail = page.thumbnails
    }
    const avatarImg = (
      <img role='presentation' className={styles.avatarImg} src={avatarURL} />
    )

    return (
      <div key={page.title + '-' + i} className={styles.post}>
        <div className={styles.thumbnail}>
          <img src={thumbnail} role='presentation' />
        </div>
        <div className={styles.content}>
          <Link className={styles.title} to={page.__url}>
            <h3>{page.title}</h3>
          </Link>
          <div className={styles.description}>
            {page.description}
          </div>
          <div className={styles.postMeta}>
            <span>written by</span>
            {avatarImg}
            <span>{author}</span>
          </div>
        </div>
      </div>
    )
  }
  render () {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: 'Doc' },
      sort: 'date',
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)
    return (
      <Page {...this.props}>
        <h2 className={styles.pageTitle}>Our latest musings on all things code...</h2>
        <div className={styles.wrapper}>
          <div className={styles.postList}>
          {latestPosts.map((page, i) => (
            this.renderLatestPreview(page, i)
          ))}
          </div>
          <div className={styles.sidebar}>
            <Advert style={{marginTop: '20px'}} client={process.env.GOOGLE_ADSENSE_CLIENT} slot={process.env.GOOGLE_ADSENSE_SLOT} format='auto' />
          </div>
        </div>
      </Page>
    )
  }
}
