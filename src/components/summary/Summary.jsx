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
            <h3>Warm Hello!</h3>
            <p>I'm a Full Stack Software Engineer and proud Galvanize alum. I'm based in Austin, Texas where I've worked remotely on distributed teams for 10 years.</p>
            <p>I love to focus on the details, solve problems thoughtfully, and learn continuously.
              I enjoy working my way through new languages and technologies to improve my skillset - as well as collaborating with other engineers on projects and hackathons.
              In addition to coding, I love to hang out with my husband and our two dogs in sunny Austin.</p>
          </div>
        </section>
      </div>
    );
  }
}


export default Summary;
