import React, { Component } from 'react';

import styles from './Tech.sass';

class Tech extends Component {
  render() {
    return (
      <div className={styles.tech}>
        <section>
          <h2>Tech</h2>
          <ul className={styles.tiles}>
            <li>
              <div className={styles.tile}>
                <h3>Node.Js</h3>
                <p>test test test</p>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <h3>JavaScript</h3>
                <p>test test test</p>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <h3>React</h3>
                <p>test test test</p>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <h3>Forth</h3>
                <p>test test test</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Tech;
