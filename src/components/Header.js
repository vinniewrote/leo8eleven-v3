import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
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
