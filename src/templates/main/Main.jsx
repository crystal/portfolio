import React, { Component } from 'react';
import { Element } from 'react-scroll';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import Me from '../../components/me/Me';
import Tech from '../../components/tech/Tech';
import Work from '../../components/work/Work';

import styles from './Main.sass';

class MainTemplate extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Header />
        <div className={styles.blank} />
        <Element name="about">
          <Me />
        </Element>
        <Element name="work">
          <Work />
        </Element>
        <Element name="tech">
          <Tech />
        </Element>
        <Footer />
      </div>
    );
  }
}

MainTemplate.defaultProps = {
  children: {}
};

MainTemplate.propTypes = {
  children: React.PropTypes.object
};

export default MainTemplate;
