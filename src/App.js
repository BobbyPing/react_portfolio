import React, { Component } from 'react';

import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import code from './code.mp4';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDraweOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className = "content" id="about_me">
        <h1> About Me Goes Here</h1>
        </div>
        <div className="work" id ="work">
        <h1>Work Goes Here</h1>
      </div>
        <div className="Contact" id ="contact">
        <video className='videoTag' autoPlay loop muted>
          <source src={code} type='video/mp4' />
        </video>
        </div>
      </div>

  

    );
  }
}

export default App;
