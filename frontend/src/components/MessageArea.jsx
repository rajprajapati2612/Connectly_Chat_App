// import React, { useEffect, useRef, useState } from 'react'
// import { IoIosArrowRoundBack } from "react-icons/io";
// import DP from "../assets/DP.webp"
// import {useDispatch, useSelector } from "react-redux";
// import { setSelectedUser } from '../redux/userSlice';
// import { useNavigate } from 'react-router-dom';
// import { BsFillEmojiSmileFill } from "react-icons/bs";
// import { FaImages } from "react-icons/fa";
// import { IoSend } from "react-icons/io5";
// import EmojiPicker from 'emoji-picker-react';
// import SenderMessage from './SenderMessage';
// import ReceiverMessage from './ReceiverMessage';
// import axios from "axios"
// import { serverUrl } from '../main';
// import { setMessages } from '../redux/messageSlice';
// const MessageArea = () => {
//   let {selectedUser,userData,socket}  = useSelector(state=>state.user);
//   let dispatch = useDispatch();
//   let navigate = useNavigate();
//   let [showPicker, setshowPicker] = useState(false)
//   let [input,setInput] = useState("");
//   let [frontendImage,setfrontendImage] = useState(null);
//   let [backendImage,setbackendImage] = useState(null);
//   let image = useRef();
//   let {messages} = useSelector(state=>state.message)  //change for some time
//   const handleSendMessage = async (e)=>{
//     e.preventDefault();
//    try {
//       let formData = new FormData()
//       formData.append("message",input);
//       if(backendImage){
//         formData.append("image",backendImage);
//       }
//       console.log("selected user ",selectedUser._id);
//       let result = await axios.post(`${serverUrl}/api/message/send/${selectedUser._id}`,formData,{withCredentials:true});
//       dispatch(setMessages([...messages,result.data]))
//       setInput("");
//       setfrontendImage(null);
//       setbackendImage(null);
//    } catch (error) {
//     console.log("send Message error", error);
//    } 
//   }
//   const onEmojiClick = (emojiData)=>{
// setInput(prevInput=>prevInput+emojiData.emoji)
//   }

//   const handleImage = (e)=>{
//     let file = e.target.files[0];
//     setbackendImage(file);
//     setfrontendImage(URL.createObjectURL(file))
//   }

//   useEffect(()=>{
//   socket.on("newMessage",(mess)=>{
//     dispatch(setMessages(prev => [...prev, mess]))
//     console.log("new messsage",mess);
//     console.log("messages", messages);
//   })
//   return ()=>socket.off("newMessage");
//    },[messages,setMessages])


// //   useEffect(()=>{
// //   if(!socket) return;

// //   const handleNewMessage = (mess)=>{
// //     dispatch(setMessages(prevMessages => [...prevMessages, mess]));
// //   }

// //   socket.on("newMessage", handleNewMessage);

// //   return ()=>{
// //     socket.off("newMessage", handleNewMessage);
// //   }

// // },[socket])
//   return (
//     <div className={`lg:w-[70%]  lg:block ${selectedUser?"flex":"hidden"} w-full h-screen bg-slate-200 border-l-4 border-gray-300 relative`}>
//       {selectedUser && 
//       <div className='w-full h-screen flex flex-col'>
//       <div className=' w-full h-25 bg-[#1b9292] rounded-b-xl shadow-gray-400 shadow-lg flex  items-center px-5 gap-5'>
//            <div className=' cursor-pointer' onClick={()=>navigate("/")}>
//                    <IoIosArrowRoundBack className='w-10 h-10  text-white' onClick={()=>dispatch(setSelectedUser(null))} />
//                  </div> 
       
//                  <div className='shadow-gray- bg-white shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center'>
//                           <img src={ selectedUser?.image || DP } className='w-1/1 h-1/1 '  />
//                         </div>
//                 <h1 className='text-xl font-semibold text-gray-200'>{selectedUser?.name || selectedUser?.userName || "user"}</h1>
//            </div>
//            <div className='w-full h-140 gap-5 flex flex-col py-7 px-5 overflow-auto' onClick={()=>setshowPicker(false)}>
//            {showPicker && <div className='absolute bottom-25 left-5'>
//             <EmojiPicker width={250} height={350} className='shadow-lg shadow-gray-700' onEmojiClick={onEmojiClick}/></div>}
//         {messages && messages
//               .filter(
//                msg =>
//              (msg.sender === userData._id && msg.receiver === selectedUser._id) ||
//   (msg.sender === selectedUser._id && msg.receiver === userData._id)).map(msg =>
//          msg.sender === userData._id
//             ? <SenderMessage key={msg._id} image={msg.image} message={msg.message} />
//             : <ReceiverMessage key={msg._id} image={msg.image} message={msg.message} />
//             ) }

//            </div>
//            </div>}

//            {!selectedUser && <div className='w-full h-1/1 flex flex-col justify-center items-center'>
//             <h1 className='text-4xl font-bold text-gray-700'>Welcome to Connectly</h1>
//             <span >Connect to you friend for chat</span>
//            </div> }
//            {selectedUser && <div className=' lg:ml-4 w-1/1 lg:w-[50%] h-14 fixed justify-center rounded-full  bottom-5 flex items-center   bg-[#1b9292] shadow-gray-700 shadow-lg '>
//            <img src={frontendImage} alt="" className='w-20 absolute bottom-32 right-[20%] rounded-lg shadow-lg shadow-gray-400'/>
//            <form className='h-10 w-[95%]  rounded-full  flex items-center gap-5' onSubmit={handleSendMessage} >
           
           
//            <div className='font-bold' onClick={()=>setshowPicker(prev=>!prev)}>
//               <BsFillEmojiSmileFill  className='w-6 h-6 text-gray-200  cursor-pointer'/>
//             </div>
//             <input type="file" accept='image/*' ref={image} hidden onChange={handleImage} />
//             <input type="text" className='w-full h-full px-2.5 outline-none border-0 text-xl text-white placeholder:white' placeholder='Message' onChange={(e)=>setInput(e.target.value)} value={input}/>
//             <div onClick={()=>image.current.click()}>
//               <FaImages className='w-6 h-6 text-gray-200 cursor-pointer' />
//             </div>
//             <button>
//               <IoSend className='w-6 h-6 text-gray-200 cursor-pointer'/>
//             </button>
//            </form>
//            </div>}
           
//     </div>
//   )
// }

// export default MessageArea




import React, { useEffect, useRef, useState } from 'react'    
import { IoIosArrowRoundBack } from "react-icons/io";         
import DP from "../assets/DP.webp"
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaImages } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';
import SenderMessage from './SenderMessage';
import ReceiverMessage from './ReceiverMessage';
import axios from "axios"
import { serverUrl } from '../main';
import { addMessage } from '../redux/messageSlice';

const MessageArea = () => {
  const { selectedUser, userData, socket } = useSelector(state => state.user);
  const { messages } = useSelector(state => state.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPicker, setshowPicker] = useState(false);
  const [input, setInput] = useState("");
  const [frontendImage, setfrontendImage] = useState(null);
  const [backendImage, setbackendImage] = useState(null);



  const image = useRef();

  
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() && !backendImage) return;

    try {
      const formData = new FormData();
      formData.append("message", input);

      if (backendImage) {
        formData.append("image", backendImage);
      }

      const result = await axios.post(
        `${serverUrl}/api/message/send/${selectedUser._id}`,
        formData,
        { withCredentials: true }
      );

      dispatch(addMessage(result.data));
      setInput("");
      setfrontendImage(null);
      setbackendImage(null);

      
    } catch (error) {
      console.log("send Message error", error);
    }
  };

  const onEmojiClick = (emojiData) => {
    setInput(prevInput => prevInput + emojiData.emoji);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setbackendImage(file);
    setfrontendImage(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (mess) => {
      dispatch(addMessage(mess));
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, dispatch]);

  

  return (
    <div className={`lg:w-[70%] lg:block ${selectedUser ? "flex" : "hidden"} w-full h-screen bg-slate-200 border-l-4 border-gray-300 relative`}>
      {selectedUser && (
        <div className='w-full h-screen flex flex-col'>
          <div className='w-full h-25 bg-[#1b9292] rounded-b-xl shadow-gray-400 shadow-lg flex items-center px-5 gap-5'>
            <div className='cursor-pointer' onClick={() => navigate("/")}>
              <IoIosArrowRoundBack className='w-10 h-10 text-white' onClick={() => dispatch(setSelectedUser(null))} />
            </div>

            <div className='bg-white shadow-lg overflow-hidden w-15 h-15 rounded-full flex justify-center items-center'>
              <img src={selectedUser?.image || DP} className='w-full h-full' alt='user' />
            </div>

            <h1 className='text-xl font-semibold text-gray-200'>
              {selectedUser?.name || selectedUser?.userName || "user"}
            </h1>
          </div>

          <div  className='w-full h-[78vh] gap-5 flex flex-col py-10 px-5 overflow-auto     ' onClick={() => setshowPicker(false)}>
            {showPicker && (
              <div className='absolute bottom-25 left-5 z-50'>
                <EmojiPicker width={250} height={350} className='shadow-lg shadow-gray-700 z-100' onEmojiClick={onEmojiClick} />
              </div>
            )}

            {messages && messages
              .filter(msg =>
                (msg.sender === userData._id && msg.receiver === selectedUser._id) ||
                (msg.sender === selectedUser._id && msg.receiver === userData._id)
              )
              .map(msg =>
                msg.sender === userData._id
                  ? <SenderMessage key={msg._id} image={msg.image} message={msg.message} />
                  : <ReceiverMessage key={msg._id} image={msg.image} message={msg.message} />
              )}

                
               
          </div>
        </div>
      )}

      {!selectedUser && (
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-gray-700'>Welcome to Connectly</h1>
          <span>Connect to your friend for chat</span>
        </div>
      )}

      {selectedUser && (
        <div className='lg:ml-4 w-full lg:w-[50%] h-14 fixed justify-center rounded-full bottom-5 flex items-center bg-[#1b9292] shadow-gray-700 shadow-lg'>
          {frontendImage && (
            <img src={frontendImage} alt='preview' className='w-20 absolute bottom-32 right-[20%] rounded-lg shadow-lg shadow-gray-400' />
          )}

          <form className='h-10 w-[95%] rounded-full flex items-center gap-5' onSubmit={handleSendMessage}>
            <div className='font-bold' onClick={() => setshowPicker(prev => !prev)}>
              <BsFillEmojiSmileFill className='w-6 h-6 text-gray-200 cursor-pointer' />
            </div>

            <input type="file" accept='image/*' ref={image} hidden onChange={handleImage} />

            {/* <input
              type="text"
              className='w-full h-full px-2.5 outline-none border-0 text-xl text-white placeholder:text-white bg-transparent'
              placeholder='Message'
              onChange={(e) => setInput(e.target.value)}
              value={input}
            /> */}

            <textarea
              className="w-full px-2.5 py-2 outline-none border-0 text-xl text-white 
             placeholder:text-white bg-transparent resize-none break-words"
         placeholder="Message"
                    onChange={(e) => setInput(e.target.value)}
                value={input}
               rows={1}
                   />

            <div onClick={() => image.current.click()}>
              <FaImages className='w-6 h-6 text-gray-200 cursor-pointer' />
            </div>

            <button type="submit">
              <IoSend className='w-6 h-6 text-gray-200 cursor-pointer' />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default MessageArea