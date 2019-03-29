import React, { Component } from 'react';

class ConnectHub extends Component {
  render() {
    return (
      <section id="#connect" className="connectMe">
        <h2>Connect</h2>
        <ul>
          <li>
            <a
              href="http://www.twitter.com/vinniewrote"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="http://www.github.com/vinniewrote"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="mailto:vizente@leo8eleven.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default ConnectHub;
