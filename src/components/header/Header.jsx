import React, { Component } from 'react';
import { Link } from 'react-scroll';

import styles from './Header.sass';

class Header extends Component {
  render() {
    return (
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
                Technology
              </Link>
            </li>
          </ul>
          <ul className={styles.social}>
            <li><a href="http://github.com/crystal">Github</a></li>
            <li><a href="https://medium.com/@crys.tate">Blog</a></li>
            <li><a href="https://twitter.com/crystal_tate">Twitter</a></li>
          </ul>
        </section>
      </div>
    );
  }
}


export default Header;
