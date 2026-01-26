import React, { useRef } from 'react'
import DP from "../assets/DP.webp"
import { IoCameraOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { serverUrl } from '../main';
import { setUserData } from '../redux/userSlice';
import axios from "axios";
import { useEffect } from 'react';


const Profile = () => {
 let {userData} = useSelector(state=>state.user);
 let navigate = useNavigate(); 
 let dispatch = useDispatch();

 let [name,setName] = useState(userData?.name || "");
 let [frontendImage,setFrontendImage] = useState(userData?.image || DP);
 let [backendImage,setBackendImage] = useState(null);

 useEffect(() => {
    if (userData) {
      setName(userData.name || ""); // 👈 keeps value on re-render
      setFrontendImage(userData.image || DP);
    }
  }, [userData]);
 let image = useRef()
 console.log("user data", userData);
 

 const handleImage = (e)=>{
let file = e.target.files[0];
setBackendImage(file);
setFrontendImage(URL.createObjectURL(file));
 }

 const handleProfile = async (e)=>{
e.preventDefault();
try {
  let formData = new FormData();
  formData.append("name",name);
  if(backendImage){
    formData.append("image",backendImage);
  }
  let result = await axios.put(`${serverUrl}/api/user/profile`,formData,{
    withCredentials:true
  });
  console.log("user name update ",result.data);
  dispatch(setUserData(result.data));
  navigate('/home');
} catch (error) {
  console.log("name update error ",error);
}
 }
 
  return (
    <div className='w-full h-screen bg-slate-200 flex flex-col justify-center items-center gap-6'>
      <div className='fixed top-5 left-5 cursor-pointer' onClick={()=>navigate("/")}>
        <IoIosArrowRoundBack className='w-10 h-10  text-gray-600' />
      </div>
     <div className=' bg-white rounded-full border-3 border-[#00c7c4] shadow-gray-400 shadow-lg  relative'>
       <div className=' overflow-hidden w-50 h-50 rounded-full flex justify-center items-center'>
         <img src={frontendImage} className='w-1/1 h-1/1 ' onClick={()=>image.current.click()} />
       </div>
       <IoCameraOutline className=' absolute text-gray-700 bottom-8 right-5 w-7 h-7'/>
     </div>

     <form className='w-[95%]  max-w-125 flex flex-col gap-5 items-center justify-center'  onSubmit={handleProfile}>
      <input type="file" accept='image/*' ref={image} hidden onChange={handleImage} />
     

      <input type="text" placeholder='Enter your name' className='text-gray-700 w-[90%] h-13 outline-none border-3 border-[#00c7c4] px-5 py-2.5 bg-white rounded-lg shadow-gray-400 shadow-lg' onChange={(e)=>setName(e.target.value)} value = {name} />
      <input type="text" readOnly  className=' text-gray-500 w-[90%] h-13 outline-none border-3 border-[#00c7c4] px-5 py-2.5 bg-white rounded-lg shadow-gray-400 shadow-lg' value={userData?.userName || ""} />
      
      <input type="email" readOnly className=' text-gray-500 w-[90%] h-13 outline-none border-3 border-[#00c7c4] px-5 py-2.5 bg-white rounded-lg shadow-gray-400 shadow-lg' value={userData?.email || ""} />
      <button  className='cursor-pointer  transition-all px-8 py-3 bg-[#00c7c4] rounded-3xl shadow-gray-400 shadow-lg font-bold text-gray-200 text-[20px] w-50 hover:shadow-inner'>Save Profile</button>
     </form>
    </div>
  )
}

export default Profile
