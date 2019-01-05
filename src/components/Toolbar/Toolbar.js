import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import logo from './logo.png';

const toolbar = props => (
<header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><img alt="logo" src={logo}></img></a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Work</a></li>
                    <li><a href="/">Contact</a></li>
                 </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;