import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import getCurrentUser from './customHooks/getCurrentUser'
import { useDispatch, useSelector } from 'react-redux'
import Home from './pages/Home'
import Profile from './pages/Profile'
import getOtherUsers from './customHooks/getOtherUsers'
import {io } from "socket.io-client"
import { serverUrl } from './main'
import { setOnlineUsers, setSocket } from './redux/userSlice'
const App = () => {
  getCurrentUser();

  getOtherUsers();
  let {userData,socket,onlineUsers} = useSelector(state=>state.user);
let dispatch  = useDispatch();
  useEffect(()=>{
    if(userData){
   const socketio = io(`${serverUrl}`,{
    query:{
      userId:userData?._id
    }
  })
 
  socketio.on("newMessage",(messa)=>{
    console.log("message of selected user",messa);
  })
  dispatch(setSocket(socketio));
  socketio.on("getOnlineUsers",(users)=>{
    dispatch(setOnlineUsers(users));
  })
  return  ()=> socketio.close()
    }
  
  else{
    if(socket){
      socket.close();
      dispatch(setSocket(null))
    }
  }
  },
  //[userData]);
  [userData?._id]);


//   useEffect(()=>{
//   if(!userData) return;

//   const socketio = io(serverUrl,{
//     query:{ userId:userData._id }
//   });

//   dispatch(setSocket(socketio));

//   socketio.on("getOnlineUsers",(users)=>{
//     dispatch(setOnlineUsers(users));
//   });

//   return ()=>{
//     socketio.disconnect();
//   }

// },[userData?._id])
  return (
    <Routes>
      <Route path='/login' element={!userData?<Login/>:<Navigate to="/"/>}></Route>
       <Route path='/signup' element={!userData?<SignUp/>:<Navigate to="/profile"/>}></Route>
       <Route path='/'  element={userData?<Home/>:<Navigate to="/login"/>}></Route>
       <Route path='/profile'  element={<Profile/>}></Route>
    </Routes>
  )
}

export default App
