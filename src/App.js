import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Nav/Navigation.js'
import PolygonOne from './components/Background/PolygonOne.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <PolygonOne />
      </div>
    );
  }
}

export default App;
