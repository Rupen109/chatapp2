import React from 'react';
import img from "../img/7224509.png";
import attach from "../img/attach.png";

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...' />
      <div className='send'>
        <img src={attach} alt=''/>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={img} alt="img" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input;