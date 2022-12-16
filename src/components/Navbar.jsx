import React from 'react';

const Navbar = () => {
  return (
      <div className="navbar">
          <span className="logo">Lama Chat</span>
          <div className="user">
              <img src="https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>john edfedf</span>
              <button>logout</button>
          </div>
      </div>
  );
}

export default Navbar;