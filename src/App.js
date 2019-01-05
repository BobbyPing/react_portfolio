import React, { Component } from 'react';

import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <SideDrawer />
        <Backdrop />
        <div className = "content">
        <p> This is the page Content!</p>
        </div>
      </div>
    );
  }
}

export default App;
