import React, { Component } from 'react';

import styles from './Me.sass';

class Me extends Component {
  render() {
    return (
      <div className={styles.me}>
        <section>
          <h1>Crystal Tate</h1>
          <h2>Full Stack Software Engineer</h2>
          <h3><a href="https://s3.amazonaws.com/ctate-resume/Crystal+Tate+Resume.pdf" target="_blank" rel="noopener noreferrer">View My Resume</a></h3>
        </section>
      </div>
    );
  }
}


export default Me;
