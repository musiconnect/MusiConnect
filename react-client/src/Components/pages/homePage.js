import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div class="row">

        <div class="column side">
          <h2>Left Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>

        <div class="column middle">
          <div class="homeLogo">
            <img src="../images/Logo.png" alt="Musiconnect Logo"/>
          </div>
          <h3>Welcome to the new hub of communictaion for the Kent State choir department.</h3>
        </div>

        <div class="column side">
          <h2>Right Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>

      </div>
    )
  }
}
export default HomePage;