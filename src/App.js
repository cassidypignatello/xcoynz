import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Nav/Navigation.js'
import PolygonOne from './components/Background/PolygonOne.js'
import PolygonTwo from './components/Background/PolygonTwo.js'
import Home from './components/Home/Home.js'
import AboutUs from './components/AboutUs/AboutUs.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <PolygonOne />
        <Home />
        <PolygonTwo />
        <AboutUs />
      </div>
    );
  }
}

export default App;
