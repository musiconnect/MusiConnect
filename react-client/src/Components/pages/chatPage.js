import React, { Component } from 'react';
import NavBar from '../headerComponent/navBar'
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
            joinedRooms: [] // an array to the rooms joined
        }
        this.sendMessage = this.sendMessage.bind(this) // binding the current user so the method sendMessage can use it 
    }
      
    componentDidMount(){  
   
       const tokenProvider = new Chatkit.TokenProvider({
           url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/eb7f4a94-a90b-450c-8e15-144ac87018b2/token" //is a token that will be useful in the chat manager that will interact with Chatkit 
       });
        
        const chatManager = new Chatkit.ChatManager({
            
        instanceLocator:"v1:us1:eb7f4a94-a90b-450c-8e15-144ac87018b2", //this is the particular instance of the Chatkit
        userId: "cmehring", // a userId 
        tokenProvider: tokenProvider //this is setting very basic information for the Chatkit to use later 
        });
        
        chatManager // the current session
            .connect() //connecting to server
            .then(currentUser => {
            this.currentUser = currentUser // setting the current user so outside methods can use the currentUser
            this.currentUser.getJoinableRooms() // getting the joinable rooms
            .then(joinableRooms =>{ // setting the joinable rooms and joined rooms 
                this.setState({
                    joinableRooms, // setting joinableRooms array
                    joinedRooms: this.curretUser.rooms // setting the joined rooms array
                })
            })
                 
        this.currentUser.subscribeToRoomMultipart({ //subscribing to a room inside the chat kit 
        
            roomId: currentUser.rooms[0].id, //goes to the first (and for now only) room of the chat kit
                hooks: {
                onMessage: message =>{ console.log("Got it: ", message); //reading the messages onto the console of the computer
                this.setState({
                    messages: [...this.state.messages, message] //creates new array with new message, don't want to modify state, need to create new state with set state
                    })
                }},
               messageLimit:5 // a limit of 5 messages will appear 
            })
            .catch(error => {
            console.error("error:", error); // just an error catcher 
            })
        })
    }; // called before render method, needed to establish connections
   
    sendMessage(text){  
        this.currentUser.sendMessage({ // setting variables 
            text: text, // the message to send
            roomId: this.currentUser.rooms[0].id // the current test room 
        })
    }; // a method to send a message
           
  render() {
    return (
      <div class="row">

        <div class="column side">
          <h2>Left Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>

        <div class="column middle" className ='chatapp'>
          <h2>Chat Page</h2>
             <MessageList messages ={this.state.messages} />  {/* calling messages sending the messages */} 
                <RoomList />  {/* calling a list of availbable rooms */} 
                <NewRoom /> {/* option to create a new room? not sure if necesary yet */}
                <SendMessage sendMessage={this.sendMessage} />  {/* optioin to send a message, sending the send message function */} 
        </div>

        <div class="column side">
          <h2>Right Side Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>

      </div>
    )
  }
}
export default ChatPage;