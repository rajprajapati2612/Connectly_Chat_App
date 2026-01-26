import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import DP from "../assets/DP.webp"
import {useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
const MessageArea = () => {
  let {selectedUser}  = useSelector(state=>state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div className={`lg:w-[70%]  lg:block ${selectedUser?"flex":"hidden"} w-full h-screen bg-slate-200 border-l-4 border-gray-300`}>
      {selectedUser &&  <div className='w-full h-25 bg-[#1b9292] rounded-b-xl shadow-gray-400 shadow-lg flex  items-center px-5 gap-5'>
           <div className=' cursor-pointer' onClick={()=>navigate("/")}>
                   <IoIosArrowRoundBack className='w-10 h-10  text-white' onClick={()=>dispatch(setSelectedUser(null))} />
                 </div> 

                 <div className='shadow-gray- bg-white shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center'>
                          <img src={ selectedUser?.image || DP } className='w-1/1 h-1/1 '  />
                        </div>
                <h1 className='text-xl font-semibold text-gray-200'>{selectedUser?.name || selectedUser?.userName || "user"}</h1>
           </div>}

           {!selectedUser && <div className='w-full h-1/1 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-gray-700'>Welcome to Connectly</h1>
            <span >Connect to you friend for chat</span>
           </div> }
       
    </div>
  )
}

export default MessageArea
