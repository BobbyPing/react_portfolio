import React, { Component } from 'react';

import './App.css';

import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <div className = "content">
        <p> This is the page Content!</p>
        </div>
      </div>
    );
  }
}

export default App;
