import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import getCurrentUser from './customHooks/getCurrentUser'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  getCurrentUser();
  let {userData} = useSelector(state=>state.user);
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
