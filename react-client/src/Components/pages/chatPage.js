import React, { Component } from 'react';
import MessageList from '../chatStuff/MessageList'
import SendMessage from '../chatStuff/SendMessage'
import NewRoom from '../chatStuff/NewRoom'
import RoomList from '../chatStuff/RoomList'
import Chatkit from '@pusher/chatkit-client' // the Chatkit

class ChatPage extends Component {
    
constructor(){
        super() // calls constructor function from extended react method 
        this.state = { // more or less private variables 
            messages:[], // creating an array to store the messages
            joinableRooms: [], // an array to store the joinable rooms
            joinedRooms: [], // an array to the rooms joined
            roomId : null
        }
        this.sendMessage = this.sendMessage.bind(this) // binding the current user so the method sendMessage can use it 
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
    
        this.getRooms = this.getRooms.bind(this)
        
        this.createRoom = this.createRoom.bind(this)
    }
   
componentDidMount(){  
   
       const tokenProvider = new Chatkit.TokenProvider({
           url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/eb7f4a94-a90b-450c-8e15-144ac87018b2/token" //is a token that will be useful in the chat manager that will interact with Chatkit 
       });
        
       const chatManager = new Chatkit.ChatManager({
            
        instanceLocator:"v1:us1:eb7f4a94-a90b-450c-8e15-144ac87018b2", //this is the particular instance of the Chatkit
        userId: "test3", // a userId 
        tokenProvider: tokenProvider //this is setting very basic information for the Chatkit to use later 
        });
        
       chatManager // the current session
            .connect() //connecting to server
            .then(currentUser => {
            this.currentUser = currentUser // setting the current user so outside methods can use the currentUser
            this.getRooms()
            this.subscribeToRoom()    
        .catch(err => console.log('error on joinableRooms: ', err))
        
 })}; // called before render method, needed to establish connections
    

getRooms(){
     this.currentUser.getJoinableRooms() // getting the joinable rooms
            .then(joinableRooms =>{ // setting the joinable rooms and joined rooms 
            
                this.setState({
                    joinableRooms, // setting joinableRooms array
                    joinedRooms: this.currentUser.rooms// setting the joined rooms array
                })
            })
}
subscribeToRoom(roomId){                  
    this.setState({messages:[]})
         this.currentUser.subscribeToRoomMultipart({ //subscribing to a room inside the chat kit 
        
            roomId: roomId,
                hooks: {
                onMessage: message =>{ console.log("Got it: ", message); //reading the messages onto the console of the computer
                this.setState({
                    messages: [...this.state.messages, message] //creates new array with new message, don't want to modify state, need to create new state with set state
                    })
                }},
               messageLimit:5 // a limit of 5 messages will appear 
            })
            .then(room => {
             this.setState({
                 roomId: roomId
             })
             this.getRooms()
         })
            .catch(err => {
            console.error("error on subscribing:", err); // just an error catcher 
            })
        }; // suscribes to a room 

sendMessage(text){  
        this.currentUser.sendMessage({ // setting variables 
            text: text, // the message to send
            roomId: this.state.roomId// the current test room 
        })
    }; // a method to send a message
    
createRoom(name){
    this.currentUser.createRoom({
        name
    })
    .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log("problem making new room: ", err))
    
}   // creates a room  

    
  render() {
      
    return (
      <div class="row">

        <div class="column side">
        <h2>Your Rooms:</h2>
           <RoomList roomID = {this.state.roomId}
            subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />  {/* calling a list of availbable rooms */} 
        </div>

        <div class="column middle" className ='chatapp'>
          <h2>Chat Page</h2>
             <MessageList
            roomId = {this.state.roomId}
            messages ={this.state.messages} />  {/* calling messages sending the messages */} 
            
                <SendMessage 
                disabled={!this.state.roomId === null}
                sendMessage={this.sendMessage} />  {/* optioin to send a message, sending the send message function */} 
        </div>

        <div class="column side">
        <NewRoom  createRoom = {this.createRoom}/> {/* option to create a new room? not sure if necesary yet */}
        </div>

      </div>
    )
  }
}
export default ChatPage;