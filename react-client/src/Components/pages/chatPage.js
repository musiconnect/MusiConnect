import React, { Component } from 'react';

class ChatPage extends Component {
  render() {
    return (
      <div class="row">

        <div class="column side">
          <h2>Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>

        <div class="column">
          <h2>Chat Page (Main Content)</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>

        <div class="column side">
          <h2>Secondary Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
        
      </div>
    )
  }
}
export default ChatPage;