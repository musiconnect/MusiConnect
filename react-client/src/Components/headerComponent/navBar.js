import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
  <html>
      <body>

        <div class="header">
            <img src="../images/Logo.png" alt="Musiconnect Logo"/>
        </div>
 
        <div class="topnav">
          <a><Link to="/homePage/">HOME</Link></a>
          <a><Link to="/calendarPage/">CALENDAR</Link></a>
          <a><Link to="/chatPage/">CHAT</Link></a>
          <a><Link to="/videoPage/">VIDEOS</Link></a>
          <a><Link to="/liveStreamPage/">LIVESTREAM</Link></a>
          <a><Link to="/syllabusPage/">SYLLABUS</Link></a>

        </div>
      </body>
    </html>
    )
  }
}
export default NavBar;