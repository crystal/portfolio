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
                <h3><a href="http://crystal.github.io/templist" target="_blank" rel="noopener noreferrer">Templist</a></h3>
                <p>Templist is a Trello Integration made in React using Firebase. Users can pick a to-do list template and export it to Trello!</p>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={styles.image} style={{ backgroundImage: 'url(images/friends.jpg)' }}/>
                <h3><a href="https://github.com/ht44/midpoint" target="_blank" rel="noopener noreferrer" >Midpoint</a></h3>
                <p>Midpoint uses the location of a group of friends, calculates the midpoint and find points of interest near the middle.</p>
              </div>
            </li>
            <li>
              <div className={styles.tile}>
                <div className={styles.image} style={{ backgroundImage: 'url(images/wakeup.jpg)' }}/>
                <h3><a href="https://github.com/crystal/a-new-day" target="_blank" rel="noopener noreferrer">Alexa Skill: A New Day</a></h3>
                <p>A New Day is an Alexa app which guides you through your morning routine to keep you on task and on schedule.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}


export default Work;
