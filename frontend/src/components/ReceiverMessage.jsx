import React, { useEffect, useRef } from 'react'
import DP from "../assets/DP.webp"
import { useSelector } from 'react-redux'
const ReceiverMessage = ({image,message}) => {
  let scroll = useRef()
  let {selectedUser} = useSelector(state=>state.user)
 useEffect(()=>{
 scroll?.current.scrollIntoView({behavoir:"smooth"})
 },[message,image])

 const handleImageScroll=()=>{
 scroll?.current.scrollIntoView({behavoir:"smooth"})
 }
  return (
    <div  className='flex items-start gap-1'>
      <div className='shadow-gray- bg-white shadow-lg overflow-hidden w-6 h-6  rounded-full flex justify-center items-center'>
                     <img src={selectedUser.image || DP } className='w-1/1 h-1/1 '  />
                   </div>
     <div ref={scroll}  className='w-fit max-w-125 px-5 py-2 bg-[#589b99] text-white text-5 rounded-tl-none rounded-2xl relative left-0 shadow-gray-400 shadow-lg gap-2.5 flex flex-col'>
      {image && <img src={image} alt="" className="w-25 rounded-lg" onLoad={handleImageScroll}/>}
     {message && <span>{message}</span>}
      </div>
    </div>
  )
}

export default ReceiverMessage
