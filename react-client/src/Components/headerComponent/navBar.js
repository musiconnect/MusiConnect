import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
  <html>
      <header>
        <div className="logo-container">
            <img src="../images/Logo.png" alt="Musiconnect Logo"/>
        </div>
      </header>
      <body>
        <div>
            <ul>
              <li><Link to="/chatPage/">CHAT</Link></li>
              <li><Link to="/calenderPage/">CALENDER</Link></li>
              <li><Link to="/homePage/">HOME</Link></li>
            </ul>
        </div>
      </body>
    </html>
    )
  }
}
export default NavBar;