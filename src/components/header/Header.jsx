import classNames from 'classnames';
import React, { Component } from 'react';
import { Link } from 'react-scroll';

import styles from './Header.sass';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
  }
  toggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }
  render() {
    return (
      <div>
        <div className={styles.header}>
          <section>
            <div className={styles.logo}>
              <img alt="Logo" src="images/devicon.png" />
            </div>
            <ul className={styles.links}>
              <li>
                <Link offset={-81} to="about" smooth>
                  About
                </Link>
              </li>
              <li>
                <Link offset={-81} to="work" smooth>
                  Work
                </Link>
              </li>
              <li>
                <Link offset={-81} to="tech" smooth>
                  Tech
                </Link>
              </li>
              <li>
                <Link offset={-81} to="contact" smooth>
                  Contact
                </Link>
              </li>
            </ul>
            <ul className={styles.social}>
              <li><a className={styles.github} href="http://github.com/crystal">Github</a></li>
              <li><a className={styles.medium} href="https://medium.com/@crys.tate">Blog</a></li>
              <li><a className={styles.twitter} href="https://twitter.com/crystal_tate">Twitter</a></li>
            </ul>
            <button className={styles.menuIcon} onClick={() => this.toggleMenu()} />
          </section>
        </div>
        <ul className={classNames(styles.menu, this.state.menuIsOpen ? styles.open : null)}>
          <li>
            <Link offset={-81} to="about" smooth>
              About
            </Link>
          </li>
          <li>
            <Link offset={-81} to="work" smooth>
              Work
            </Link>
          </li>
          <li>
            <Link offset={-81} to="tech" smooth>
              Tech
            </Link>
          </li>
          <li>
            <Link offset={-81} to="contact" smooth>
              Contact
            </Link>
          </li>
          <li><a className={styles.github} href="http://github.com/crystal">Github</a></li>
          <li><a className={styles.medium} href="https://medium.com/@crys.tate">Blog</a></li>
          <li><a className={styles.twitter} href="https://twitter.com/crystal_tate">Twitter</a></li>
        </ul>
      </div>
    );
  }
}


export default Header;
