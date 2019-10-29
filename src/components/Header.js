import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? 'fixed-nav' : ''}>
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
