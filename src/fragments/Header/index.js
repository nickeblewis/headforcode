import React, { Component } from 'react'
import { Link } from 'react-router'
import handleClickAway from '../../utils/handleClickAway'
import Svg from 'react-svg-inline'
import gitHubSvg from '../../assets/icons/github.svg'
import styles from './Header.css'
// import ProfileIcon from '../../components/ProfileIcon'

/*
<NewAuth logoutOnClick={true} loggedInComponent={<ProfileIcon />}>
  Login
</NewAuth>
*/

export default class Header extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  componentDidMount () {
    document.body.addEventListener('click', this.closeNav)
  }
  componentWillUnmount () {
    document.body.removeEventListener('click', this.closeNav)
  }
  closeNav (e) {
    const toggleNode = this.refs.toggle
    const isOutsideClick = handleClickAway(toggleNode, e)
    if (toggleNode && isOutsideClick) {
      this.setState({
        sideNavOpen: false
      })
    }
  }
  handleClick () {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }
  render () {
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
    return (
      <header className={styles.header}>
        <div className={styles.bumper} />
        <div className={styles.navFixed}>
          <div className={styles.navWrapper}>
            <div className={styles.navLeft}>
            </div>
            <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
              <div className={styles.ham}>
                <div className={styles.bar + ' ' + openClass}></div>
              </div>
            </div>
            <nav className={styles.navRight + ' ' + mobileNav}>
              <ul className={styles.navItems}>
                <li className={styles.navItem}>
                  <Link to='/' className={styles.link}>
                    Home
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/posts' className={styles.link}>
                    Blog
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/contact' className={styles.link}>
                    Contact
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <a href='https://www.github.com/nickeblewis/headforcode' target='_blank' className={styles.link}>
                    <Svg svg={gitHubSvg} cleanup />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
