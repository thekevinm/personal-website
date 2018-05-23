import React, { Component } from 'react';
import '../styles/Info.css'
import iosApp from '../assets/streetEatsIOS.gif'
import webApp from '../assets/webApp.gif'

class Info extends Component {
  render() {
    return (
    <div>

      <div className="projectContainer">
        <h1>PROJECTS</h1>
      </div>
    
    <div className="bigProjContainer">

      <div className="projContainer">
        <h1>Street Eats</h1>
        <img src={webApp} className="webAppContainer"/>
      </div>

      <div className="projContainer">
        <h1>Street Eats iOS</h1>
        <img src={iosApp} className="iosAppContainer" />
      </div>
    
    </div>

    </div>
    );
  }
}

export default Info;