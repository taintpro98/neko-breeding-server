import multer from "multer";
import path from "path";

export const SAVING_IMAGES_FOLDER = './uploads'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, SAVING_IMAGES_FOLDER)
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
})
  
export const upload = multer({ storage: storage })