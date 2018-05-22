import React, { Component } from 'react';
import '../styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <header>
          <div className="contactInfo">
            <p>Contact Me:</p>
            <p>702-769-7449</p>
            <p>kevinmcgahey1114@gmail.com</p>
          </div>

          <div className="headName">
          <h1>Kevin McGahey</h1>
          </div>

          <div className="socials">
            <a href="https://github.com/thekevinm" className="socialIcon">
              <img src="https://image.flaticon.com/icons/svg/25/25231.svg" className="socialIcon"/>
            </a>
            <a href="https://www.linkedin.com/in/kevin-mcgahey-185528162/" className="socialIcon">
              <img src="http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png" className="socialIcon" />
            </a>
          </div>
          
        </header>
        
      </div>
    );
  }
}

export default Header;