import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Header from './headerComponent/header';
import NavBar from './HeaderComponent/NavBar';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/calendarPage';
import ChatPage from './pages/chatPage';
import VideoPage from './pages/videoPage';
import LiveStreamPage from './pages/liveStreamPage';
import SyllabusPage from './pages/syllabusPage';
import Footer from './footerComponent/footer';
//import id_token from google.oauth2

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <div>
                <Header />
                <NavBar />
                <Switch>
                  <Route name="home" path="/homePage/" component={HomePage} />
                  <Route name="calendar" path="/calendarPage/" component={CalendarPage} />
                  <Route name="chat" path="/chatPage/" component={ChatPage} />
                  <Route name="videos" path="/videoPage/" component={VideoPage} />
                  <Route name="livestream" path="/liveStreamPage/" component={LiveStreamPage} />
                  <Route name="Syllabus" path="/syllabusPage" component={SyllabusPage} />
                  <Redirect exact from='/' to='/homePage' />
                </Switch>
                <Footer />
            </div>
        </div>
      </Router>
    )
  }
}
export default App;