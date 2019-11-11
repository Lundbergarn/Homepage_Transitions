import React, { Component } from 'react';
import styles from './HeaderNav.module.scss';
import { NavLink } from 'react-router-dom';

const links = [
  {link: '/', text: 'Home'},
  {link: '/projects', text: 'Projects'},
  {link: '/about', text: 'About'},
];


class HeaderNav extends Component {
  // navbar: { current: null | HTMLDivElement };
  // openNav: { current: null | HTMLDivElement };

  constructor() {
    super();
    this.navbar = React.createRef();
    this.openNav = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeNavBackground);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeNavBackground);
  }

  changeNavBackground = () => {
    const navBar = this.navbar;
    if (navBar) {
      let scrollValue = window.pageYOffset;
      if(scrollValue > 0) {
        navBar.style.backgroundColor = "rgb(34,34,34)";
      } else {
        navBar.style.backgroundColor = "transparent";
      }
    }
  }

  openNavbar = () => {
    this.navbar.style.width = "250px";
    this.openNav.style.backgroundColor = "transparent";
  }

  closeNavbar = () =>   {
    this.navbar.style.width = "0";
    this.openNav.style.backgroundColor = "rgb(34,34,34)";
  }


  linksMarkup = () => {
    return links.map((link) => {
      return (
        <li className={styles.menu__list_item} key={link.link}>
          <NavLink
            onClick={() => this.closeNavbar()}
            to={link.link}
            className={styles.menu__link}
          >
            {link.text}
          </NavLink>
        </li>
      );
    });
  };

  render() {

    return(
      <div>
        <div>
          <nav ref={ref => this.navbar = ref} id="navbar" className={styles.menu__header} >
            <span
              className="closebtn"
              onClick={this.closeNavbar}
            >
              &times;
            </span>
            <div className={styles.menu__left} >
              <ul
                className={styles.menu__list} >
                {this.linksMarkup()}
              </ul>
            </div>
          </nav>
        </div>
        <div ref={ref => this.openNav = ref} id="openNav" className={styles.openNav} >
          <span
            onClick={this.openNavbar}
            className={styles.slide__icon}
          >
            &#9776;
          </span>
        </div>
      </div>
    )
  }
}

export default HeaderNav;
