import React, { Component } from 'react';


class RoomList extends Component {
  render() {
      const orderRooms = [...this.props.rooms].sort((a,b)=> a.id - b.id)
    console.log(this.props.rooms)
    return (
       <div className= "room-list">
        <ul> 
        {orderRooms.map(room => {
        const active = this.props.roomID === room.id ? "active" : ""; return(
            <li key={room.id} className = {"room" + active}>
                <a onClick={() =>this.props.subscribeToRoom(room.id) } href = "#"> {room.name}</a> 
            </li>
        )})}
        </ul>
       </div>
    )
  }
}
export default RoomList;