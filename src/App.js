import React, { Component } from 'react';
import Header from './components/header/Header.jsx'
import Me from './components/me/Me.jsx'
import Work from './components/work/Work.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Me />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
