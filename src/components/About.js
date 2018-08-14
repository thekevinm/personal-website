import React, { Component } from 'react';
import '../styles/About.css'
import headshot from '../assets/headshot.jpg'
import github from '../assets/githublogo.svg'
import linkedin from '../assets/linkedin.png'


class About extends Component {
  render() {
    return (
      <div className="aboutContainer">

        <div className="myStory">
            <p>Hello! My name is Kevin and I am a Front End Developer who</p> 
            <p>primarily uses JavaScript, but picking up a new framework or</p>
            <p>language isn't a problem. I graduated from PunchCode and</p>
            <p>know how to quickly get web applications up and running</p>
            <p>from start to finish.</p>
        </div>

        <img className="headshot" src={headshot} alt="" />

        <div className="socials">
            <a href="https://github.com/thekevinm" target="_blank" className="socialIcon" rel="noopener noreferrer">
              <img src={github} className="socialIcon" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/kevin-mcgahey-185528162/" target="_blank" className="socialIcon" rel="noopener noreferrer">
              <img src={linkedin} className="socialIcon" alt="" />
            </a>
        </div>
        
        <div className="connectContainer">
            <h2>CONNECT</h2>
            <p>kevinmcgahey1114@gmail.com</p>
            <p>702-769-7449</p> 
        </div>
        
      </div>
    );
  }
}

export default About;
