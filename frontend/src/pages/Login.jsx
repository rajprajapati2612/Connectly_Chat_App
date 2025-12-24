import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
 let navigate = useNavigate();
  let [show,setShow] = useState(false);
  const handleClick = ()=>{
    setShow(prev=>!prev);
  }
  return (
    <div className='w-full h-screen bg-slate-200 flex justify-center items-center '>
      <div className='w-full max-w-125 h-150 bg-white rounded-lg shadow-gray-400 shadow-lg flex flex-col gap-7.5'>
      <div className='w-full h-50 bg-[#00c7c4] rounded-b-[30%] shadow-gray-400 shadow-lg flex items-center justify-center'>
        <h1 className='text-gray-600 font-bold text-[30px]'>Welcome to <span className='text-white'>Connectly</span></h1>
      </div>
      <form className='w-full flex flex-col gap-7 items-center'>
        
        <input type="email" placeholder='email' className='w-[90%] h-[90%] outline-none border-3 border-[#00c7c4] px-5 py-2.5 bg-white rounded-lg shadow-gray-400 shadow-lg'  />
        <div className='relative overflow-hidden py-2 w-[90%] h-[90%] border-3 border-[#00c7c4]  rounded-lg shadow-gray-400 shadow-lg'>
          <input type={`${show?"text":"password"}`} placeholder='password' className='w-full h-full outline-none  px-5 py-2.5 bg-white' />
        <span className=' font-semibold absolute top-2 right-5 text-[19px] text-[#00c7c4] cursor-pointer' onClick={handleClick}>{`${show?"hide":"show"}`}</span>
         </div>
        <button className=' transition-all px-8 py-3 bg-[#00c7c4] rounded-3xl shadow-gray-400 shadow-lg font-bold text-gray-200 text-[20px] w-50 hover:shadow-inner'>Login</button>
        <p className=' cursor-pointer font-semibold text-gray-600' onClick={()=>navigate("/signup")}>Doesn't Have an Account ?<span className='text-[#00c7c4] text-[20px]'>Sign up</span></p>
      </form>
      </div>
    </div>
  )
}

export default Login
