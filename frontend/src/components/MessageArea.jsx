import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import DP from "../assets/DP.webp"
import {useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaImages } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';
import SenderMessage from './SenderMessage';
const MessageArea = () => {
  let {selectedUser}  = useSelector(state=>state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [showPicker, setshowPicker] = useState(false)
  let [input,setInput] = useState("");
  const onEmojiClick = (emojiData)=>{
setInput(prevInput=>prevInput+emojiData.emoji)
  }
  return (
    <div className={`lg:w-[70%]  lg:block ${selectedUser?"flex":"hidden"} w-full h-screen bg-slate-200 border-l-4 border-gray-300 relative`}>
      {selectedUser && 
      <div className='w-full h-screen flex flex-col'>
      <div className=' w-full h-25 bg-[#1b9292] rounded-b-xl shadow-gray-400 shadow-lg flex  items-center px-5 gap-5'>
           <div className=' cursor-pointer' onClick={()=>navigate("/")}>
                   <IoIosArrowRoundBack className='w-10 h-10  text-white' onClick={()=>dispatch(setSelectedUser(null))} />
                 </div> 
       
                 <div className='shadow-gray- bg-white shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center'>
                          <img src={ selectedUser?.image || DP } className='w-1/1 h-1/1 '  />
                        </div>
                <h1 className='text-xl font-semibold text-gray-200'>{selectedUser?.name || selectedUser?.userName || "user"}</h1>
           </div>
           <div className='w-full h-140  flex flex-col pt-7 px-5' onClick={()=>setshowPicker(false)}>
           {showPicker && <div className='absolute bottom-25 left-5'>
            <EmojiPicker width={250} height={350} className='shadow-lg shadow-gray-700' onEmojiClick={onEmojiClick}/></div>}
          <SenderMessage/>
           </div>
           </div>}

           {!selectedUser && <div className='w-full h-1/1 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-gray-700'>Welcome to Connectly</h1>
            <span >Connect to you friend for chat</span>
           </div> }
           {selectedUser && <div className=' lg:ml-4 w-1/1 lg:w-[50%] h-14 fixed justify-center rounded-full  bottom-5 flex items-center   bg-[#1b9292] shadow-gray-700 shadow-lg marker:'>
           <form className='h-10 w-[95%]  rounded-full  flex items-center gap-5' onSubmit={(e)=>e.preventDefault()} >
            <div className='font-bold' onClick={()=>setshowPicker(prev=>!prev)}>
              <BsFillEmojiSmileFill  className='w-6 h-6 text-gray-200  cursor-pointer'/>
            </div>
            <input type="text" className='w-full h-full px-2.5 outline-none border-0 text-xl text-white placeholder:white' placeholder='Message' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <div>
              <FaImages className='w-6 h-6 text-gray-200 cursor-pointer' />
            </div>
            <div>
              <IoSend className='w-6 h-6 text-gray-200 cursor-pointer'/>
            </div>
           </form>
           </div>}
           
    </div>
  )
}

export default MessageArea
