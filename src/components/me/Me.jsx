import React, { Component } from 'react';

import styles from './Me.sass';

class Me extends Component {
  render() {
    return (
      <div className={styles.me}>
        <section>
          <h1>Crystal Tate</h1>
          <h2>Full Stack Software Engineer</h2>
        </section>
      </div>
    );
  }
}


export default Me;
