import React, { Component } from 'react';

import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import bp from './bp.JPG';
import WhenInView from './components/About/About';
import Bounce from 'react-reveal/Bounce';


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

        <div className = "hero_section">
          <div className = "hero_content_wrapper">
          <WhenInView>
            {({ isInView }) =>
              <Bounce bottom hide={!isInView}> 
            <div className = "hero_content">
              <h2>Front End/React Developer and UI/UX Designer/Developer</h2>
            
            </div>
            </Bounce>
              }
            </WhenInView>
          </div>
        </div>
          <div className = "portrait">
            <img alt="bp" src ={bp}></img>
          </div>

   
          <WhenInView>
            {({ isInView }) =>
              <Bounce bottom hide={!isInView}>      
                   <h1> About Me </h1>
                   
                <div className ="bio">
                 <h3>
                 I am newer to Southern Utah and absolutely love it here! I love the outdoors
                 and there is so much to see and do in this area. I am a father of two amazing 
                 children and couldn't be luckier. We love to travel, hike, cook and try new foods 
                 and play music. I also love art, arcitecture, and photography. After working 
                 for many years as an IT Professional, I developed a passion for user experience, 
                 user interface, and development in general. I decided to get serious about web
                 development and enrolled and graduated from Bottega Tech's Full Stack Certification
                 Program and since have developed websites and applications using HTML, CSS, SCSS, 
                 Javascript, React, and Python. There is NOTHING I would rather be doing as a career.
                </h3> 
                </div>
                  
              
                    <h3> Currently Seeking Full Time Employment Opportunities!</h3>
                <div class="button">
                  <form action="#contact">
                    <button>Get in touch!</button>
                  </form>
                </div>
          
                </Bounce>
              }
            </WhenInView>

        </div>
  
    

    
        <div className="work" id ="work">
        <h1>Work Goes Here</h1>
      </div>
        <div className="contact" id ="contact">

        <h1>Contact Me Goes Here</h1>
        </div>
    </div>

  

    );
  }
}

export default App;
