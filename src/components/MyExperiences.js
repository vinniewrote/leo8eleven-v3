import React, { Component } from 'react';

class MyExperiences extends Component {
  render() {
    return (
      <section id="myExperience">
        <h2>My Experience</h2>
        <div className="workExperience">
          <div className="role current">
            <h3>FastModel Sports</h3>
            <h4>Senior Software Engineer</h4>
            <p className="datesOfEmp">May 2019 - Present</p>
            <ul className="responsibilities">
              <li>
                Developing updated front-end architecture for FastModel's
                recruit application
              </li>
              <li>Upgraded app to the current version of react</li>
              <li>
                Taking advantage of React Context API with Redux.js for state
                management
              </li>
              <li>Implemented updated linting for JavaScript and CSS</li>
              <li>Cut the number of bugs per release down by 10%</li>
              <li>Controlled the weekly deployment process with Jenkins</li>
            </ul>
          </div>
          <div className="role past">
            <h3>Egencia</h3>
            <h4>UI Software Engineer II</h4>
            <p className="datesOfEmp">April 2018 - May 2019</p>
            <ul className="responsibilities">
              <li>
                Leveraged several proprietary data APIs in order to create an
                immersive user experience
              </li>
              <li>Lowered latency on page load by 250ms</li>
              <li>
                Developed UI-focused A/B tests for the homepage of egencia.com
              </li>
              <li>
                Refined coding standards that lowered occurrence of bugs by~5%
              </li>
              <li>
                Collaborated with the UX Designer on future tests and
                enhancements
              </li>
            </ul>
          </div>
          <div className="role past">
            <h3>Expedia</h3>
            <h4>Technology Lead</h4>
            <p className="datesOfEmp">September 2016 - April 2018</p>
            <ul className="responsibilities">
              <li>
                Managed and mentored a team of engineers to implement features
                on expedia.com
              </li>
              <li>
                Collaborated with Product and UX to deliver timely features
              </li>
              <li>Monitored site performance with Splunk</li>
              <li>Led UI Community of Practice to foster knowledge transfer</li>
            </ul>
          </div>
          <div className="role past">
            <h3>Orbitz Worldwide</h3>
            <h4>UI Software Engineer II</h4>
            <p className="datesOfEmp">February 2014 - September 2016</p>
            <ul className="responsibilities">
              <li>
                Developed responsive-focused enhancements for the orbitz.com{' '}
              </li>
              <li>
                Developed HTML email templates that lowered call rates by ~5%
              </li>
              <li>
                Championed Orbitz proprietary responsive framework to increase
                adoption
              </li>
              <li>Served as a mentor to new developers in the company</li>
            </ul>
          </div>
          <div className="role past">
            <h3>Sandbox Studio</h3>
            <h4>Senior Front-End Developer</h4>
            <p className="datesOfEmp">January 2013 - February 2014</p>
            <ul className="responsibilities">
              <li>
                Designed and developed sites with HTML, CSS, JavaScript and PHP
              </li>
              <li>
                Established a web development process to lower turnaround time
              </li>
              <li>
                Researched emerging UI technologies that can help advance
                interactivity in a mobile-first environment
              </li>
            </ul>
          </div>
          <div className="role past">
            <h3>Sears Holdings</h3>
            <h4>Lead Front-End Developer</h4>
            <p className="datesOfEmp">September 2011 - January 2013</p>
            <ul className="responsibilities">
              <li>
                Designed and developed features for sears, craftsman, kenmore
                and kmart.com
              </li>
              <li>Developed methodologies, standards and best practices</li>
              <li>
                Conducted code walkthroughs and quality assurance with
                development teams
              </li>
            </ul>
          </div>
        </div>
        <div className="myEducation">
          {/* <h3>My Education</h3> */}
          <div className="schooling">
            <h3>Illinois Institute of Technology</h3>
            <h4>Stuart Graduate School of Business</h4>
            <h4>Master of Science, Marketing Communication</h4>
            <p className="graduationDate">June 2006</p>
          </div>
          <div className="schooling">
            <h3>University of Arizona</h3>
            <h4>Bachelor of Science, Psychology</h4>
            <p className="graduationDate">May 2002</p>
          </div>
        </div>
      </section>
    );
  }
}

export default MyExperiences;
