import React, { Component } from 'react';
import '../styles/Info.css'
import iosApp from '../assets/ezgif.com-video-to-gif.gif'
import webApp from '../assets/webApp.gif'
import jsclock from '../assets/gifClock.gif'
import slacker from '../assets/slackerPic.png'
import skeu from '../assets/skeucard.gif'
import git from '../assets/githublogo.svg'


var clock = document.getElementById('clock');

function bigClock() {
	var time = new Date();
 	var hours = time.getHours().toString();
 	var minutes = time.getMinutes().toString();
 	var seconds = time.getSeconds().toString();

 	if (hours > 12) {
 		hours = hours % 12;
 	}

 	if (hours.length < 2) {
 		hours = '0' + hours
	}

 	if (minutes.length < 2) {
 		minutes = '0' + minutes
 	}

 	if (seconds.length < 2) {
		seconds = '0' + seconds
	}

	var color = "#"+hours+minutes+seconds
	document.body.style.background = color;
	document.getElementsByClassName("hex").innerHTML = color;
}

bigClock();
setInterval(bigClock, 1000);

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
        <a href="https://github.com/classZero/street-eats" target="_blank"><img src={git} className="gitHubContainer" /></a>
      </div>

      <div className="projContainer">
        <h1>Street Eats iOS</h1>
        <img src={iosApp} className="iosAppContainer" />
        <p>Street Eats iOS is the mobile app version that utilizes React Native to create a fun user experience. Trucks can quickly update their locations from their phones and users can instantaneously see where they are.</p>
        <a href="https://github.com/classZero/street-eats-app" target="_blank"><img src={git} className="gitHubContainer" /></a>
      </div>

      <div className="projContainer2">
        <h1>Slack Clone</h1>
        <img src={slacker} className="slackerContainer" />
        <p>Slacker is a Slack clone for instant messaging between users and has to the ability to create custom chat rooms. This app was made possible by using Socket.io for fast instant messaging.</p>
        <a href="https://github.com/thekevinm/slacker" target="_blank"><img src={git} className="gitHubContainer" /></a>
      </div>

      <div className="projContainer2">
        <h1>Credit Card Validator</h1>
        <img src={skeu} className="skeuContainer" />
        <p>As users enter credit card info, using Regex, it can check for valid information and update the image in the top right to be the correct credit card company.</p>
        <a href="https://github.com/thekevinm/react-card-validator" target="_blank"><img src={git} className="gitHubContainer" /></a>
      </div>

      <div className="projContainer3">
        <h1>JavaScript Hex Clock</h1>
        <img src={jsclock} className="jsClockContainer" />
        <a className="hex"></a>
        <p>This is a JavaScript clock that uses the current time that correlates to hex colors and is being used right now to change the background color every second!</p>
        <a href="https://github.com/thekevinm/Javascript-Clock" target="_blank"><img src={git} className="gitHubContainer" /></a>
      </div>
    
    </div>

    </div>
    );
  }
}

export default Info;