import React from 'react';
import call from "../img/videocall.png";
import more from "../img/more.png";
import Messagess from './Messagess';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane doe</span>
        <div className="chatIcons">
          <img src={call} alt="" />
          <img src={more} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
    
      <Messagess />
      <Input />
    </div>
  )
}

export default Chat;