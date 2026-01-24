import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DP from "../assets/DP.webp"
import { IoMdSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Sidebar = () => {

    let {userData} = useSelector(state=>state.user);
    let [search,setSearch] = useState(false);
  return (
    <div className='lg:w-[30%] w-full h-screen bg-slate-200'>
      <div className='w-full h-75 bg-[#00c7c4] rounded-b-[30%] shadow-gray-400 shadow-lg flex flex-col  justify-center px-5'>
        <h1 className='text-white font-bold text-2xl'>Connectly</h1>
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-gray-700 font-bold text-2xl'>Hello,  {userData.name.charAt(0).toUpperCase() + userData.name.slice(1)}</h1>
             <div className='shadow-gray-500 shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center'>
         <img src={userData.image || DP } className='w-1/1 h-1/1 '  />
       </div>

        </div>
        <div>

          {!search && <div className='shadow-gray-500 bg-gray-200 cursor-pointer shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center' onClick={()=>setSearch(true)}>
           <IoMdSearch className='w-6 h-6 text-gray-700'/>
       </div>}
       {search && 
       <form className=' mt-6 w-full h-15 shadow-gray-500 bg-gray-200 shadow-lg flex items-center gap-2.5 rounded-full overflow-hidden px-5'>
        <IoMdSearch className='w-6 h-6 text-gray-700'/>
        <input type="text" placeholder='search users...' className='w-full h-1/1 p-2.5 outline-0 border-0 text-[17px]'/>
        <RxCross1 className='text-2xl cursor-pointer font-bold' onClick={()=>setSearch(false)}/>
        </form>}
            
        </div>
      </div>
    </div>
  )
}

export default Sidebar
