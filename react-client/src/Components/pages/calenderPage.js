import React, { Component } from 'react';

class CalenderPage extends Component {
	render() {
		return (
			<div>
				<Calendar />
			</div>
    )
  }
}
export default CalenderPage;


class Calendar extends React.Component {
	render(){
		return(
			<div className="pageBody">
				<iframe src="https://calendar.google.com/calendar/b/3/embed?showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%232952A3&amp;src=4vvqdqcmu1nsgikae8250v453s%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York" width="800" height="600" frameborder="0" scrolling="no"></iframe>
			</div>
		)
	}
}
