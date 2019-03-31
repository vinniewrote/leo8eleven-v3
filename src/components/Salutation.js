import React, { Component } from 'react';
import headshotimg from '../headshot-sm.png';
import Connect from './ConnectHub';

class Saluation extends Component {
  render() {
    return (
      <div className="flex-salutation">
        <div className="headshot">
          <img src={headshotimg} alt="headshot" />
        </div>
        <div className="salutation">
          <h1>vizente freeman</h1>
          <h2>UI &amp; UX Hybrid</h2>
          <Connect />
        </div>
      </div>
    );
  }
}

export default Saluation;
