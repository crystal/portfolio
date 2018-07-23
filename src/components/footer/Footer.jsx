import React, { Component } from 'react';

import styles from './Footer.sass';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <section>
          &copy; 2018 | Crystal Tate
        </section>
      </div>
    );
  }
}


export default Footer;
