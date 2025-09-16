import multer from "multer";
import path from "path";
import fs from "fs";

const UPLOADS_FOLDER = path.join("./uploads");


if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);  
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); 
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  }
});


// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only JPG, PNG, WEBP allowed"), false);
//   }
// };

export const upload = multer({
  storage,
  // fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});
