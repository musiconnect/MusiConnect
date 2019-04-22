import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class MessageList extends Component {
 
componentWillUpdate(){
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 1000 >= node.scrollHeight 
}    
componentDidUpdate(){
    if(this.shouldScrollToBottom) {
    const node = ReactDOM.findDOMNode(this)
    node.scrollTop = node.scrollHeight
    }
}   // directly after component updated 
    
    
render() {
    if (this.props.roomId === ""){
         return( <div className= "message-list">
            <div className ="join">
                &larr; Join A Room
                </div>
        </div> 
    )}
        
    return (
       <div className= "message-list">
       {this.props.messages.map((message, index) => {
           const active = this.props.profile === message.senderId ? "active" : ""; // accessing the messages and putting them into a map to print out
                return(
                  
                    <div>
                     <div className = {"messageID"+active}>{message.senderId}:</div> {/* the id */}
                     <div className = {"message"+active}> {message.parts[0].payload.content}</div> {/* the message */}
                      <div className = "messageTime"> {message.createdAt}</div> {/* the message time */}
                    </div>
                   
                )
            })} 
       </div>
    )
  }
}

export default MessageList;