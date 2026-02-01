import { useEffect } from "react"
import { serverUrl } from "../main"
import { useDispatch, useSelector } from "react-redux"
import { setOtherUsers, setUserData } from "../redux/userSlice";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";
const getMessages = ()=>{
    let dispatch = useDispatch();
    let {userData,selectedUser} = useSelector(state=>state.user)
   useEffect(()=>{
    const fetchMessages = async ()=>{
        try {
            let result  = await axios.get(`${serverUrl}/api/message/get/${selectedUser._id}`,{withCredentials:true});
            dispatch(setMessages(result.data));
        } catch (error) {
            console.log("get Messages Error ",error)
        }
    }
    fetchMessages();
   },[selectedUser,userData]) 
}

export default getMessages