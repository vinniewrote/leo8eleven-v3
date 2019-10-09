import React, { Component } from 'react';
import companies from '../data/companyIcons';

class MySkillset extends Component {
  state = {
    companies,
  };

  render() {
    return (
      <section id="skillset" className="sizer">
        <h2>My Skills</h2>
        <div className="mySoftSkills">
          <ul>
            <li>Leadership</li>
            <li>Problem Solving</li>
            <li>Attention to Detail</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Mentorship</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default MySkillset;
