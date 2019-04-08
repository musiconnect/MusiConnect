import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
       <div className= "message-list">
        <br/><br/><br/><br/>
            {this.props.messages.map((message, index) =>{ // accessing the messages and putting them into a map to print out
                return(
                    <div>
                     <div className = "messageID">{message.senderId}:</div> {/* the id */}
                     <div className = "message"> {message.parts[0].payload.content}</div> {/* the message */}
                    </div>
                )
            })}
       </div>
    )
  }
}

export default MessageList;