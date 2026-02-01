import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageArea from '../components/MessageArea'
import getMessages from '../customHooks/getMessages.jsx'

const Home = () => {
  getMessages();
  return (
    
    <div className='flex w-full h-screen overflow-hidden'>
      <Sidebar/>
      <MessageArea/>
    </div>
  )
}

export default Home
