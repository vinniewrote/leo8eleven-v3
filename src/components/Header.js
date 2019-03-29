import React, { Component } from 'react';
import logo from '../leoLogo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Leo8eleven</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skillset">Skills</a>
            </li>
            <li>
              <a href="#myExperience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
