import http from "http"
import express from "express"
import {Server} from 'socket.io'
let app = express();
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"https://connectly-chat-app-1.onrender.com"
    }
}); 

export const userSocketMap = {}
export const getReceiverSocketId = (receiver)=>{
    return userSocketMap[receiver]
}
io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("user id",userId);

    console.log("socket id",socket.id);
    if(userId!= undefined){
        userSocketMap[userId] = socket.id
        console.log(userSocketMap)
    }
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
    socket.on("disconnect",()=>{
    delete  userSocketMap[userId]
    io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})
export {app,server,io}
