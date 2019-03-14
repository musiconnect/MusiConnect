import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/HomePage';
import CalenderPage from './pages/calenderPage';
import NavBar from './HeaderComponent/NavBar';
//import id_token from google.oauth2

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <div className="logo-container">
                <img src="../images/Logo.png" alt="Musiconnect Logo"/>
            </div>
            <div>
                <NavBar />
                <Route name="home" exact path="/homePage" component={HomePage} />
                <Route name="calender" exact path="/calenderPage" component={CalenderPage} />
            </div>
        </div>
      </Router>
    )
  }
}
export default App;