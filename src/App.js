import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/PortfolioCard';
import Skills from './components/MySkillset';
import Availability from './components/AvailableForWork';
import MyResume from './components/MyResume';
import MyExperiences from './components/MyExperiences';
import Connect from './components/ConnectHub';
import MyVitals from './components/MyVitals';
import folioData from './data/portfolioData';

class App extends Component {
  state = {
    folioData,
  };

  render() {
    return (
      <div className="contentBoundary">
        <Header />
        {/* <Availability /> */}
        <MyVitals />
        <Skills />
        <MyExperiences />
        <section id="portfolio" className="portfolioContainer">
          <h2>Portfolio</h2>
          <div className="portfolioCards">
            {Object.keys(folioData).map(key => (
              <Portfolio key={key} slate={folioData[key]} />
            ))}
          </div>
        </section>
        <Connect />
      </div>
    );
  }
}

export default App;
