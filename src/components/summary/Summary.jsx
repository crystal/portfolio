import React, { Component } from 'react';

import styles from './Summary.sass';

class Summary extends Component {
  render() {
    return (
      <div className={styles.summary}>
        <section>
          <div className={styles.imageContainer}>
            <div className={styles.image} />
          </div>
          <div className={styles.paragraph}>
            <h3>Hi. I'm Crystal! </h3>
            <p>I'm a front-end software developer working in medtech.</p>
            <p>When I'm not enjoying Austin with my husband and our pups, you'll find me at React & NodeJS meetups. I love to tinker with new languages, frameworks and dev tools to build interesting things. </p>
            <p>Please say hi on <a href="https://twitter.com/crystal_tate" rel="noopener noreferrer" target="_blank">Twitter</a>!</p>
          </div>
        </section>
      </div>
    );
  }
}


export default Summary;
