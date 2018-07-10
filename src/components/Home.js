import React, { Component } from 'react';
import Header from './Header'
import About from './About'
import Info from './Info'
import '../styles/Home.css'

class Home extends Component { 
  render() {
    return (
      <div>
        <Header />
        <About />
        <Info />
      </div>
    );
  }
}

export default Home;