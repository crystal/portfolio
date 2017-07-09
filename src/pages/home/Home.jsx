import React, { Component } from 'react';

import Me from '../../components/me/Me';
import Work from '../../components/work/Work';
import Tech from '../../components/tech/Tech';

import styles from './Home.sass';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Me />
        <Work />
        <Tech />
      </div>
    );
  }
}

export default HomePage;
