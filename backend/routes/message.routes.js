import express from "express"
import isAuth from "../middlewares/isAuth.js";
import {upload} from "../middlewares/multer.js"
import { sendMessage } from "../controllers/message.controller.js";

const messageRouter = express.Router();


messageRouter.post('/send',isAuth,upload.single("image"),sendMessage);



export default messageRouter;