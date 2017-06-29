import React, { Component } from 'react';
import './Work.css';

import DeskImage from './desk.jpg';
import FriendImage from './friends.jpg';
import WakeupImage from './wakeup.jpg'

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <section>
          <h1>My Work</h1>
          <ul className="WorkTiles">
            <li>
              <div className="WorkTile">
                <div className="WorkImage" style={{ backgroundImage: `url(${DeskImage})` }}/>
                <h3>Templist</h3>
                <p>Templist is a Trello Integration made in React. Select to-do list templates and export them to Trello!</p>
              </div>
            </li>
            <li>
              <div className="WorkTile">
                <div className="WorkImage" style={{ backgroundImage: `url(${FriendImage})` }}/>
                <h3>Midpoint</h3>
                <p>Midpoint helps friends meet in the middle! Find points of interest - somewhere around the middle.</p>
              </div>
            </li>
            <li>
              <div className="WorkTile">
                <div className="WorkImage" style={{ backgroundImage: `url(${WakeupImage})` }}/>
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
