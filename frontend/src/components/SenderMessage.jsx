import React from 'react'
import DP from "../assets/DP.webp"
const SenderMessage = ({image,message}) => {
  return (
    <div className='w-fit max-w-125 px-5 py-2 bg-[#00c7c4] text-white text-5 rounded-tr-none rounded-2xl relative right-0 ml-auto shadow-gray-400 shadow-lg gap-2.5 flex flex-col'>
    {image && <img src={image} alt="" className="w-25 rounded-lg"/>}
     {message && <span>{message}</span>}
     
    </div>
  )
}

export default SenderMessage
