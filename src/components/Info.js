import React, { Component } from 'react'
import '../styles/Info.css'
import iosApp from '../assets/ezgif.com-video-to-gif.gif'
import webApp from '../assets/webApp.gif'
import jsclock from '../assets/gifClock.gif'
import slacker from '../assets/slackerPic.png'
import skeu from '../assets/skeucard.gif'
import blog from '../assets/laravel-gif.gif'
import tictac from '../assets/tictactoe-gif.gif'
import git from '../assets/githublogo.svg'

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
        <a href="https://www.streeteats.us/" target="_blank" rel="noopener noreferrer"><img src={webApp} className="webAppContainer" alt=""/></a>
        <p>Street Eats is a single page web app utilizing React and Redux for state management. It is meant for food truck owners to quickly update their location by using geolocation and drop a pin on our map for users to follow their favorite trucks. Users can also order their favorite food by using Stripe for payments and Socket.io for instant order notifications to the food trucks. Click <a href="https://www.streeteats.us/" target="_blank" rel="noopener noreferrer">here</a> to view it live!</p> 
        <a href="https://github.com/classZero/street-eats" target="_blank" rel="noopener noreferrer"><img src={git} className="gitHubContainer" alt="" /></a>
      </div>

      <div className="projContainer">
        <div className="borderLeft">
          <h1>Street Eats iOS</h1>
          <img src={iosApp} className="iosAppContainer" alt=""/>
          <p>Street Eats iOS is the mobile app version that utilizes React Native to create a fun user experience. Trucks can quickly update their locations from their phones and users can instantaneously see where they are.</p>
          <a href="https://github.com/classZero/street-eats-app" target="_blank" rel="noopener noreferrer"><img src={git} className="gitHubContainer" alt="" /></a>
        </div>
      </div>

      <div className="projContainer2">
        <h1>Blog Website</h1>
        <img src={blog} className="slackerContainer" alt=""/>
        <p>A blog website made with PHP and Laravel to allow users to create custom posts with text and images. Users are able to edit and delete posts as well for the best experience.</p>
        <a href="https://github.com/thekevinm/laravel-blog" target="_blank" rel="noopener noreferrer"><img src={git} className="gitHubContainer" alt=""/></a>
      </div>

      <div className="projContainer2">
        <div className="borderLeft">
          <h1>Tic Tac Toe</h1>
          <img src={tictac} className="iosAppContainer" alt=""/>
          <p>An iOS mobile game utilizing React Native for two players to play a fun game of Tic Tac Toe created with some JavaScript for functionality.</p>
          <a href="https://github.com/thekevinm/TicTacToe" target="_blank" rel="noopener noreferrer"><img src={git} className="gitHubContainer" alt=""/></a>
        </div>
      </div>

      <div className="projContainer2">
        <h1>Slack Clone</h1>
        <img src={slacker} className="slackerContainer" alt=""/>
        <p>Slacker is a Slack clone for instant messaging between users and has to the ability to create custom chat rooms. This app was made possible by using Socket.io for fast instant messaging.</p>
        <a href="https://github.com/thekevinm/slacker" target="_blank" rel="noopener noreferrer"><img src={git} className="gitHubContainer" alt=""/></a>
      </div>

      <div className="projContainer2">
        <div className="borderLeft">
          <h1>Credit Card Validator</h1>
          <img src={skeu} className="skeuContainer" alt=""/>
          <p>As users enter credit card info, using Regex, it can check for valid information and update the image in the top right to be the correct credit card company.</p>
          <a href="https://github.com/thekevinm/react-card-validator" target="_blank" rel="noopener noreferrer"><img src={git} className="gitHubContainer" alt=""/></a>
        </div>
      </div>

      <div className="projContainer3">
        <h1>JavaScript Hex Clock</h1>
        <img src={jsclock} className="jsClockContainer" alt=""/>
        <p>This is a JavaScript clock that uses the current time that correlates to hex colors and changes background color every second!</p>
        <a href="https://github.com/thekevinm/Javascript-Clock" target="_blank" rel="noopener noreferrer"><img src={git} className="gitHubContainer" alt=""/></a>
      </div>
    
    </div>

    </div>
    );
  }
}

export default Info;