import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <button type="button">
          <a href="#about">About</a>
        </button>
        <button type="button">
          <a href="#skillset">Skills</a>
        </button>
        <button type="button">
          <a href="#myExperience">Experience</a>
        </button>
        <button type="button">
          <a href="#portfolio">Portfolio</a>
        </button>
        <button type="button">
          <a href="#connect">Connect</a>
        </button>
      </nav>
    );
  }
}

export default Header;
