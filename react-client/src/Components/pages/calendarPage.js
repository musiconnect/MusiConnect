import React, { Component } from 'react';

class CalenderPage extends Component {
	render() {
		return (
      <div class="row">

        <div class="column side">
          <h2>Left Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>

			  <div class="column middle" style = "width:50%;">
				  <iframe src="https://calendar.google.com/calendar/b/3/embed?showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%232952A3&amp;src=4vvqdqcmu1nsgikae8250v453s%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York" width="800" height="600" frameborder="0" scrolling="no"></iframe>
			  </div>

        <div class="column side">
          <h2>Left Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>
      
      </div>
    )
  }
}
export default CalenderPage;
