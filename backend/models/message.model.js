import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
sendor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
receiver:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User",
   required:true 
},
message:{
    type:String,
    default:""
},
image:{
type:String,
default:""
},
},{timestamps:true});

const Message = mongoose.model("Message",messageSchema);
export default Message