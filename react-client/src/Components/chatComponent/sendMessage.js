import React, { Component } from 'react';


class SendMessage extends Component {
  
    
    constructor(){
        super() // calling the constructor from component to begin messing with the state 
        this.state = { 
            message: '' // a blank message 
        }
        this.handleChange = this.handleChange.bind(this); // allowing the handle to access the message 
        this.handleSubmit = this.handleSubmit.bind(this); // allowing the submit to access the message 
    }  // a constructor to set variables
    
    handleChange(stuff){   
        this.setState({ 
            message: stuff.target.value // sets the message to the value of the typing
        })
    } // handles the changes when the user is typing
    
    handleSubmit(stuff){
        stuff.preventDefault() // prevents the default from being sent if accidentally hit submit
        this.props.sendMessage(this.state.message) // calls the send Message funciton that was passed into it
        this.setState({
            message: '' // resets the message to empty
        })
    } // handles when the user hits submit
    
    render() {
        return (
            <form 
                onSubmit={this.handleSubmit} // send the message on submit
                className= "send-message"> 
            <input className="sendMessageBox"
            disabled={this.props.disabled}
                onChange={this.handleChange} // as the text is changing, change the message 
                value={this.state.message} // a place holder of the input
                placeholder="Message" type="text" />
            </form>
            
            )
        }
    }

export default SendMessage;