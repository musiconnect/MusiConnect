import React, { Component } from 'react';
import MessageList from '../chatComponent/messageList'
import SendMessage from '../chatComponent/sendMessage'
import NewRoom from '../chatComponent/newRoom'
import RoomList from '../chatComponent/roomList'
import Chatkit from '@pusher/chatkit-client' // the Chatkit
  

class ChatPage extends Component {
    
constructor(){
        super() // calls constructor function from extended react method 
        this.state = { // more or less private variables 
            messages:[], // creating an array to store the messages
            joinableRooms: [], // an array to store the joinable rooms
            joinedRooms: [], // an array to the rooms joined
            roomId : "",
            gprofile: ""
    
        }

        this.sendMessage = this.sendMessage.bind(this) // binding the current user so the method sendMessage can use it 
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
    
        this.getRooms = this.getRooms.bind(this)
        
        this.createRoom = this.createRoom.bind(this)
    
       // this.createUser =
        //this.createUser.bind(this)
    }
   
componentDidMount(){  
   <div>
    <script src = "script.js"></script>
    </div>
   
       const tokenProvider = new Chatkit.TokenProvider({
           url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/eb7f4a94-a90b-450c-8e15-144ac87018b2/token" //is a token that will be useful in the chat manager that will interact with Chatkit 
       });
   
    const hatkit = require('@pusher/chatkit-server')
    const chatkit = new hatkit.default({
  instanceLocator: "v1:us1:eb7f4a94-a90b-450c-8e15-144ac87018b2",
  key: "e79d4f6c-5834-41f7-bb89-58cb70abd1e0:9m+Ee5nNCNveC2uH3zXwIkz2h/nnZXDjIKPaKb7cJYE=",
})
    chatkit.createUser({
    id: profile.getEmail(),
    name: profile.getEmail(),
    })
   .then(() => {
    console.log('User created successfully');
  }).catch((err) => {
    console.log(err);
  });
  this.setState({
      gprofile : profile.getEmail() 
  });
  
       // var pleaseGod = profile.getEmail();
    //    this.createUser(pleaseGod)
       const chatManager = new Chatkit.ChatManager({
     instanceLocator:"v1:us1:eb7f4a94-a90b-450c-8e15-144ac87018b2", //this is the particular instance of the Chatkit
        userId: profile.getEmail(), // a userId 
           
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
               messageLimit: 20 // a limit of 5 messages will appear 
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
/*
createUser(text){
       const Chatkit = require('@pusher/chatkit-server')
    const chatkit = new Chatkit.default({
  instanceLocator: "v1:us1:eb7f4a94-a90b-450c-8e15-144ac87018b2",
  key: "e79d4f6c-5834-41f7-bb89-58cb70abd1e0:9m+Ee5nNCNveC2uH3zXwIkz2h/nnZXDjIKPaKb7cJYE=",
})
    chatkit.createUser({
    id: text,
    
    })
   .then(() => {
    console.log('User created successfully');
  }).catch((err) => {
    console.log(err);
  });
    
}
*/
    
  render() {
      
    return (
      <div class="chatRow">
        
        <div class="leftcolumn">
            <div class="card">
                <h2>Your Rooms:</h2>
                    <RoomList roomID = {this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinedRooms]} />  {/* calling a list of availbable rooms */} 
                <h2>Joinable Room:</h2>
                    <RoomList roomID = {this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinableRooms]} />  {/* calling a list of availbable rooms */}
                <h2>Add New Room:</h2>
                    <NewRoom  createRoom = {this.createRoom}/> {/* option to create a new room? not sure if necesary yet */}
            </div>
        </div>

        <div class="rightcolumn">
            <div class="card">
                <h2>Chat Page</h2>
                    <MessageList
                    roomId = {this.state.roomId}
                    messages ={this.state.messages} 
                    profile ={this.state.gprofile}
                    />  {/* calling messages sending the messages */} 
            
                    <SendMessage 
                    disabled={this.state.roomId === ""}
                    sendMessage={this.sendMessage} />  {/* optioin to send a message, sending the send message function */} 
            </div>
        </div>
      </div>
    )
  }
}
export default ChatPage;