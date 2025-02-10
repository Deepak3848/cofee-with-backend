import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file to cloudinary and return the url
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto'
    });
    //file uploaded successfully to cloudinary
    console.log('File uploaded successfully to cloudinary', result.url);
    return result;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved file
    return null;
    console.log('Error in cloudinary upload', error);
  }
}

export { uploadToCloudinary };