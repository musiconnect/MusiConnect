import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="logo-container">
            <img src="../images/Logo.png" alt="Musiconnect Logo"/>
        </div>
        <div classname="nav-container">
            <ul id="headerButtons">
              <li className="navButton"><Link to="/HomePage/">HOME</Link></li>
              <li className="navButton"><Link to="/CalenderPage/">CALENDAR</Link></li>
            </ul>
        </div>
        
      </header>
    )
  }
}
export default NavBar;