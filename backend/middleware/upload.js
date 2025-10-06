import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'my-project',            
    // allowed_formats: ['jpg','jpeg','png','webp'],
  }
});

export const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }
});
