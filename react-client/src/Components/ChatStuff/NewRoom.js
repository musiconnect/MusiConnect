import React, { Component } from 'react';


class NewRoom extends Component {
  
    constructor(){
        super()
        this.state = {
            roomName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(stuff){
        this.setState({
            roomName: stuff.target.value
        })
    }
    
    handleSubmit(stuff){
        stuff.preventDefault()
        this.props.createRoom(this.state.roomName)
        this.setState({roomName: ""})
    }
    
    
    
    render() {
    return (
       <div className= "new-room">
        <form onSubmit = {this.handleSubmit}>
            <input 
                value = {this.state.roomName}
                onChange = {this.handleChange}
                type = "text"
                placeholder="New Room"
                required />
            <button id="new-room-button" type ="submit">+</button>
        </form>
        <br/><br/><br/><br/>
       </div>
    )
  }
}
export default NewRoom;