const multer = require("multer");
const path = require("path");
const fs = require("fs");

const imagePath = path.join(__dirname,"../uploads/images");
const videoPath = path.join(__dirname, "../uploads/videos");
const pdfPath = path.join(__dirname, "../uploads/pdfs")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(file.mimetype.startsWith("image")){
        return cb(null, imagePath);
    }

    if(file.mimetype.startsWith("video")){
        return cb(null,videoPath);
    }

    if(file.mimetype === "application/pdf"){
        return cb(null, pdfPath);
    }

    return cb(new Error("Unsupported file type"));
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-"+file.originalname;
    cb(null, uniqueName);
  }
})

const fileFilter = (req, file, cb)=>{
    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "video/mp4",
        "application/pdf"
    ]
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true);
    } else{
        cb(new Error("Only image, video and pdf files are allowed"));
    }
};

const upload = multer({ 
    storage,
    fileFilter,
    limits:{
        fileSize: 20 * 1024 * 1024
    }
});

module.exports = upload;
