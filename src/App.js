import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Nav/Navigation.js'
import PolygonOne from './components/Background/PolygonOne.js'
import PolygonTwo from './components/Background/PolygonTwo.js'
import Home from './components/Home/Home.js'
import AboutUs from './components/AboutUs/AboutUs.js'
import Overview from './components/Overview/Overview.js'
import Token from './components/Token/Token.js'
import Documents from './components/Documents/Documents.js'
import Roadmap from './components/Roadmap/Roadmap.js'
import Team from './components/Team/Team.js'
import Advisors from './components/Team/Advisors.js'
import Blog from './components/Blog/Blog.js'
import OurPartners from './components/OurPartners/OurPartners.js'

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
        <Overview />
        <Token />
        <Documents />
        <Roadmap />
        <Team />
        <Advisors />
        <Blog />
        <OurPartners />
      </div>
    );
  }
}

export default App;
