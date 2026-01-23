import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (filePath)=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
    });  
    
    try {
      // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(filePath);
     await  fs.promises.unlink(filePath);
       return uploadResult.secure_url;  
    } catch (error) {
        console.log('cloudinary error',error);
         await  fs.promises.unlink(filePath);
    }


    
}

export default uploadOnCloudinary