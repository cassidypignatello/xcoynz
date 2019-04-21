import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Nav/Navigation.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;
