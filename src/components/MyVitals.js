import React, { Component } from 'react';

class MyVitals extends Component {
  render() {
    return (
      <section id="about" className="sizer">
        <h2>About Me</h2>

        <div className="mySummary">
          <p>
            UI Engineer with 8+ years of experience architecting, designing and
            maintaining websites and apps that drive business growth and improve
            UX.
          </p>
        </div>

        <div className="myTechSkills">
          <ul>
            <li className="btnStyle">html5</li>
            <li className="btnStyle">css3</li>
            <li className="btnStyle">Javascript</li>
            <li className="btnStyle">React</li>
            <li className="btnStyle">php</li>
            <li className="btnStyle">rails</li>
            <li className="btnStyle">sketch</li>
            <li className="btnStyle">Illustrator</li>
            <li className="btnStyle">Photoshop</li>
          </ul>
        </div>

        <div className="cvDownload">
          <a
            href="https://www.dropbox.com/s/lyzcwzbjzh5fk6x/resume-vizente-freeman.pdf?dl=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </section>
    );
  }
}

export default MyVitals;
