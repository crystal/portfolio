import React, { Component } from 'react';

import styles from './Me.sass';

class Me extends Component {
  render() {
    return (
      <div className={styles.me}>
        <section>
          <h1>Crystal Tate</h1>
          <h2>Full Stack Software Engineer</h2>
          <p>I am based in Austin, Texas where I've worked remotely on distributed teams for 10 years.</p>
          <p>Being a developer allows me to focus on the details, solve problems thoughtfully,
            and learn continuously. I enjoy working with new languages and technologies to expand my toolkit.
            My experience with project management and UX/UI has given me a passion (read: obsession)
            for pixel-perfect and friction-free front end design.</p>
        </section>
      </div>
    );
  }
}


export default Me;
