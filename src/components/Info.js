import React, { Component } from 'react';
import '../styles/Info.css'
import iosApp from '../assets/ezgif.com-video-to-gif.gif'
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
        <p>Street Eats is a single page web app utilizing React and Redux for state management. It is meant for food truck owners to quickly update their location by using geolocation and drop a pin on our map for users to follow their favorite trucks. Users can also order their favorite food by using Stripe for payments and Socket.io for instant order notifications to the food trucks.</p> 
      </div>

      <div className="projContainer">
        <h1>Street Eats iOS</h1>
        <img src={iosApp} className="iosAppContainer" />
        <p>Street Eats iOS is the mobile app version that utilizes React Native to create a fun user experience. Trucks can quickly update their locations from their phones and users can instantaneously see where they are.</p>
      </div>

      <div className="projContainer2">
        <h1>Street Eats iOS</h1>
        {/* <img src={iosApp} className="iosAppContainer" /> */}
      </div>

      <div className="projContainer2">
        <h1>Street Eats iOS</h1>
        {/* <img src={iosApp} className="iosAppContainer" /> */}
      </div>

      <div className="projContainer3">
        <h1>Street Eats iOS</h1>
        {/* <img src={iosApp} className="iosAppContainer" /> */}
      </div>

      <div className="projContainer3">
        <h1>Street Eats iOS</h1>
        {/* <img src={iosApp} className="iosAppContainer" /> */}
      </div>
    
    </div>

    </div>
    );
  }
}

export default Info;