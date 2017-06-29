import React, { Component } from 'react';
import './Header.css';

import Image from './devicon.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <section>
          <div className="HeaderLogo">
            <img alt="Logo" src={Image} />
          </div>
          <ul className="HeaderLinks">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <ul className="HeaderSocial">
            <li><a href="/">Github</a></li>
            <li><a href="/about">Blog</a></li>
            <li><a href="/work">Twitter</a></li>
          </ul>
        </section>
      </div>
    );
  }
}


export default Header;
