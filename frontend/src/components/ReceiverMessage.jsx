import React from 'react'
import DP from "../assets/DP.webp"
const ReceiverMessage = ({image,message}) => {
  return (
    <div  className='w-fit max-w-125 px-5 py-2 bg-[#589b99] text-white text-5 rounded-tl-none rounded-2xl relative left-0 shadow-gray-400 shadow-lg gap-2.5 flex flex-col'>
      <img src={DP} alt="" className='w-25 rounded-lg' />
      {image && <img src={image} alt="" className="w-25 rounded-lg"/>}
     {message && <span>{message}</span>}
      
    </div>
  )
}

export default ReceiverMessage
