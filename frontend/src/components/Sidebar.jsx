import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DP from "../assets/DP.webp"
import { IoMdSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import axios from 'axios';
import { serverUrl } from '../main';
import { useNavigate } from 'react-router-dom';
import { setOtherUsers, setUserData, setSelectedUser } from '../redux/userSlice';

const Sidebar = () => {

    let {userData,otherUsers,selectedUser} = useSelector(state=>state.user);
    let [search,setSearch] = useState(false);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    console.log("otherUsers data",otherUsers)


    const handleLogout = async ()=>{
      try {
        let result = await axios.get(`${serverUrl}/api/auth/logout`,{
          withCredentials:true
        })
        dispatch(setUserData(null));
        dispatch(setOtherUsers(null));
        navigate("/login")
      } catch (error) {
        console.log("logout error ",error);
      }
    }
  return (
    <div className={`lg:w-[30%] lg:block ${!selectedUser?"block":"hidden"} w-full h-screen bg-slate-200`}>
      <div className='shadow-gray-500 bg-[#00c7c4] cursor-pointer shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center fixed bottom-5 left-2.5' onClick={handleLogout}>
           <TbLogout2 className='w-6 h-6 text-white'/>
       </div>
      <div className='w-full h-75 bg-[#00c7c4] rounded-b-[30%] shadow-gray-400 shadow-lg flex flex-col  justify-center px-5'>
        <h1 className='text-white font-bold text-2xl'>Connectly</h1>
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-gray-700 font-bold text-2xl'>Hello,  {userData.name.charAt(0).toUpperCase() + userData.name.slice(1) || "user"}</h1>
             <div className='shadow-gray- bg-white shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center'>
         <img src={userData.image || DP } className='w-1/1 h-1/1 '  />
       </div>

        </div>
        <div className='w-full flex items-center gap-5'>

          {!search && <div className='shadow-gray-500 bg-gray-200 cursor-pointer shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center' onClick={()=>setSearch(true)}>
           <IoMdSearch className='w-6 h-6 text-gray-700'/>
       </div>}
       {search && 
       <form className=' mt-6 w-full h-15 shadow-gray-500 bg-gray-200 shadow-lg flex items-center gap-2.5 rounded-full overflow-hidden px-5'>
        <IoMdSearch className='w-6 h-6 text-gray-700'/>
        <input type="text" placeholder='search users...' className='w-full h-1/1 p-2.5 outline-0 border-0 text-[17px]'/>
        <RxCross1 className='text-2xl cursor-pointer font-bold' onClick={()=>setSearch(false)}/>
        </form>}
            {!search && otherUsers?.map((user)=>{
           return   <div>
              <div className='shadow-gray-500 bg-white mt-2.5 shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center'>
         <img src={user.image || DP } className='w-1/1 h-1/1 '  />
         
       </div>
       </div>

            })}
        </div>
      </div>
     <div className='w-full h-[60vh] overflow-auto flex flex-col gap-5 items-center mt-5 px-3'>
      {otherUsers?.map((user)=>{
           return   <div className='w-full h-17 flex  items-center  gap-5 bg-white shadow-gray-500 shadow-lg rounded-full cursor-pointer hover:bg-[#83f3f5]' onClick={()=>dispatch(setSelectedUser(user))}>
              <div className='shadow-gray-600 bg-white ml-1 shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center'>
         <img src={user.image || DP } className='w-1/1 h-1/1 '  />
         
       </div>
        <h1 className='text-xl font-semibold text-gray-600'>{user.name || user.userName}</h1>
       </div>
       
            })}
           

     </div>
    </div>
  )
}

export default Sidebar
