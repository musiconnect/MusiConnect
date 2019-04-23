import React, { Component } from 'react';

class LiveStreamPage extends Component {
  render() {
    return (
      <div class="row">

        <div class="column side">
        <div class="syllabusInfoBox">
            <h2>Kent State Choir</h2>
            <h1>LiveStream</h1>
            <br></br><br></br>
            <h4>This shows the current and past livestreams for various groups within the Music Department.</h4>
            <br></br><br></br>
            <h4>The currently live or most recent, if none are live right now, are shown first.</h4>
            <br></br>
          </div>
        </div>

        <div class="column middle">
          <iframe width="100%" height="700" id="liveHtml" src="../kent-music-live.html"></iframe>
        </div>

      </div>
    )
  }
}
export default LiveStreamPage;