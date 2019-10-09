import React, { Component } from 'react';
import github from '../github.svg';
import linkedin from '../linkedin.svg';
import email from '../email.svg';

class ConnectHub extends Component {
  render() {
    return (
      <section className="connectMe">
        <button type="button">
          <a
            href="http://www.github.com/vinniewrote"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </button>
        <button type="button">
          <a
            href="https://www.linkedin.com/in/vizentefreeman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </button>
        <button type="button">
          <a
            href="mailto:vizente@leo8eleven.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="email" />
          </a>
        </button>
      </section>
    );
  }
}

export default ConnectHub;
