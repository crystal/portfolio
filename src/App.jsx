import React, { Component } from 'react';

import Header from './components/header/Header';
import Me from './components/me/Me';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import Tech from './components/tech/Tech';

import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Me />
        <Work />
        <Tech />
        <Footer />
      </div>
    );
  }
}

export default App;
