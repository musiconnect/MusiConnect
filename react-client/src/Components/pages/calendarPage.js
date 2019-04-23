import React, { Component } from 'react';

class CalenderPage extends Component {
	render() {
		return (
      <div class="row">

        <div class="column side">
          <div class="syllabusInfoBox">
            <h2>Kent State Choir</h2>
            <h1>Calendar</h1>
            <br></br><br></br>
            <h4>This calendar displays all of the past and upcoming events, recitals, and practices.</h4>
            <br></br>
          </div>
        </div>

			  <div class="column middle">
				  <iframe src="https://calendar.google.com/calendar/b/3/embed?showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%232952A3&amp;src=4vvqdqcmu1nsgikae8250v453s%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York" width="1000" height="690" frameborder="0" scrolling="no"></iframe>
			  </div>
      </div>
    )
  }
}
export default CalenderPage;
