import React, { Component } from 'react';

class LiveStreamPage extends Component {
  render() {
    return (
      <div class="row">

        <div class="column side">
          <h2>Left Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>

        <div class="column middle">
          <iframe width="100%" height="700" id="liveHtml" src="../kent-music-live.html"></iframe>
        </div>

      </div>
    )
  }
}
export default LiveStreamPage;