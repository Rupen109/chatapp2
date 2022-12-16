import React from 'react'
import Chatting from './Chatting'
import Navbar from './Navbar'
import Search from './Search'

const Sidebar = () => {
  return (
    <div className='sidebar'>
          <Navbar />
          <Search />
          <Chatting />
    </div>
  )
}

export default Sidebar