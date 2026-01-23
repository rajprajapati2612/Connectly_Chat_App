import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { serverUrl } from '../main';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice';

const SignUp = () => {
  let navigate = useNavigate();
  let [show,setShow] = useState(false);
  let [userName,setUserName] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [err,setErr] = useState('');
  let dispatch = useDispatch();
  

  const handleClick = ()=>{
    setShow(prev=>!prev);
  }

  const handleSignUp = async (e)=>{
    e.preventDefault();
    setLoading(true);
   console.log("SENDING:", { userName, email, password });
    try{
    let result = await axios.post(`${serverUrl}/api/auth/signup`,{
userName,email,password
    },{withCredentials: true});
    console.log("result data",result.data);
    dispatch(setUserData(result.data));
    
   
    setUserName('');
    setEmail('');
    setPassword('');
    setLoading(false);
    setErr('');
    
    } catch(error){
 console.log("STATUS:", error.response.status);
  console.log("MESSAGE:", error.response.data.message);
  setLoading(false);
  setErr(error?.response?.data?.message);
    }
    
  }
  
  return (
    <div className='w-full h-screen bg-slate-200 flex justify-center items-center '>
      <div className='w-full max-w-125 h-150 bg-white rounded-lg shadow-gray-400 shadow-lg flex flex-col gap-7.5'>
      <div className='w-full h-50 bg-[#00c7c4] rounded-b-[30%] shadow-gray-400 shadow-lg flex items-center justify-center'>
        <h1 className='text-gray-600 font-bold text-[30px]'>Welcome to <span className='text-white'>Connectly</span></h1>
      </div>
      <form className='w-full flex flex-col gap-7 items-center' onSubmit={handleSignUp}>
        <input type="text" placeholder='username' className='w-[90%] h-[90%] outline-none border-3 border-[#00c7c4] px-5 py-2.5 bg-white rounded-lg shadow-gray-400 shadow-lg text-gray-700' onChange={(e)=>{setUserName(e.target.value);
        }} value={userName}/>
        <input type="email" placeholder='email' className='w-[90%] h-[90%] outline-none border-3 border-[#00c7c4] px-5 py-2.5 bg-white rounded-lg shadow-gray-400 shadow-lg text-gray-700' onChange={(e)=>{setEmail(e.target.value)}} value={email} />
        <div className='relative overflow-hidden py-2 w-[90%] h-[90%] border-3 border-[#00c7c4]  rounded-lg shadow-gray-400 shadow-lg'>
          <input type={`${show?"text":"password"}`} placeholder='password' className=' text-gray-700 w-full h-full outline-none  px-5 py-2.5 bg-white' onChange={(e)=>{setPassword(e.target.value)}} value={password} />
        <span className=' font-semibold absolute top-2 right-5 text-[19px] text-[#00c7c4] cursor-pointer' onClick={handleClick}>{`${show?"hide":"show"}`}</span>
         </div>
         {err && <p className='text-red-600'>{err}</p>}
        <button type='submit'  className=' transition-all px-8 py-3 bg-[#00c7c4] rounded-3xl shadow-gray-400 shadow-lg font-bold text-gray-200 text-[20px] w-50 hover:shadow-inner' disabled={loading}>{loading? "Loading...":"Sign up"}</button>
        <p className=' cursor-pointer font-semibold text-gray-600' onClick={()=>navigate("/login")}>Already Have an Account ?<span className='text-[#00c7c4] text-[20px]'>Login</span></p>
      </form>
      </div>
    </div>
  )
}

export default SignUp
