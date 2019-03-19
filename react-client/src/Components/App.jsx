import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from './HeaderComponent/NavBar';
import HomePage from './pages/HomePage';
import CalenderPage from './pages/calenderPage';
//import id_token from google.oauth2

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <div>
                <NavBar />
                <Route name="home" path="/homePage" component={HomePage} />
                <Route name="calender" path="/calenderPage" component={CalenderPage} />
            </div>
        </div>
      </Router>
    )
  }
}
export default App;