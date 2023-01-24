import React from 'react';
import call from "../img/videocall.png";
import more from "../img/more.png";
import Messagess from './Messagess';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';
import { useContext } from 'react';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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