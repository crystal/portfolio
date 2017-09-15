import classNames from 'classnames';
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
                <div className={classNames(styles.image, styles.javascript)} />
                <h3>JavaScript (ES6/ES7)</h3>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={classNames(styles.image, styles.react)} />
                <h3>React / Redux</h3>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={classNames(styles.image, styles.express)} />
                <h3>ExpressJS</h3>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={classNames(styles.image, styles.angular)} />
                <h3>Angular</h3>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={classNames(styles.image, styles.lambda)} />
                <h3>AWS Lambda</h3>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={classNames(styles.image, styles.ec2)} />
                <h3>AWS EC2</h3>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={classNames(styles.image, styles.dynamodb)} />
                <h3>AWS DynamoDB</h3>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={classNames(styles.image, styles.firebase)} />
                <h3>Firebase</h3>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Tech;
