import React, { Component } from 'react';

import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import bp from './bp.JPG';

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
          <div className = "portrait">
            <img alt="bp" src ={bp}></img>
          </div>
          <h1> About Me </h1>
             <h2>Hello! My name is Bobby Ping.  I am a Front End/React Developer and UI/UX Designer/Developer</h2>
          <div className = "bio">
            <span> 
              <p>I am newer to Southern Utah and absolutely love it here! I love the outdoors and there is so much to see and do in this area. I am a father of two amazing children. We love to travel, hike, cook and try new foods, and play music. I also love art, arcitecture, and photography.After working for many years as an <b>IT Professional</b>, I <b>developed</b> a passion for <b>user experience</b>, <b>user interface</b>, and <b>development</b> in general.
                I decided to get serious about <b>web development</b> and enrolled and graduated from Bottega Tech's Full Stack Certification Program and since have <b>developed websites</b> and <b>applications</b> using <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, <b>Javascript</b>, <b>React</b>, and <b>Python</b>
              </p> 
            </span>
            </div> 
              <h3> Currently Seeking Full Employment Opportunities!</h3>
            <div class="button">
              <form action="#contact">
                <button>Get in touch!</button>
              </form>
            </div>
          </div>
  
    

    
        <div className="work" id ="work">
        <h1>Work Goes Here</h1>
      </div>
        <div className="contact" id ="contact">
        {/*<video className='videoTag' autoPlay loop muted>
          <source src={code} type='video/mp4' />
    </video>-->*/}
        <h1>Contact Me Goes Here</h1>
        </div>
      </div>

  

    );
  }
}

export default App;
