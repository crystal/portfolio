import React, { Component } from 'react';

import styles from './Work.sass';

class Work extends Component {
  render() {
    return (
      <div className={styles.work}>
        <section>
          <h2>My Work</h2>
          <ul className={styles.tiles}>
            <li>
              <div className={styles.tile}>
                <div className={styles.image} style={{ backgroundImage: 'url(images/desk.jpg)' }}/>
                <h3>Templist</h3>
                <p>Templist is a Trello Integration made in React. Select to-do list templates and export them to Trello!</p>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={styles.image} style={{ backgroundImage: 'url(images/friends.jpg)' }}/>
                <h3>Midpoint</h3>
                <p>Midpoint helps friends meet in the middle! Find points of interest - somewhere around the middle.</p>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={styles.image} style={{ backgroundImage: 'url(images/wakeup.jpg)' }}/>
                <h3>Alexa Skill: A New Day</h3>
                <p>A New Day guides you through your morning routine to keep you on task and on schedule.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}


export default Work;
