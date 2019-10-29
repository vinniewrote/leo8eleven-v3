import React, { Component, Fragment } from 'react';
import headshotimg from '../headshot-sm.png';
import Connect from './ConnectHub';
import Header from './Header';

class Saluation extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div
          className="masthead"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div className="headshot">
            <img
              src={headshotimg}
              alt="headshot"
              syle={{ width: '200px', maxHeight: '100%' }}
            />
          </div>
          <div className="salutation">
            <h1>vizente freeman</h1>
            <h2>UI &amp; UX Hybrid</h2>
            <Connect />
          </div>
        </div>
      </div>
    );
  }
}

export default Saluation;
