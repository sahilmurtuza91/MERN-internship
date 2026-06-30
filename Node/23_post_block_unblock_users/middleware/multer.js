const multer = require("multer");

const path = require("path");
const fs = require("fs");

const imagePath = path.join(__dirname, "../uploads/images");
const videoPath = path.join(__dirname, "../uploads/videos");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // this is for the image uploads
        if (file.mimetype.startsWith("image")) {
            return cb(null, imagePath);
        }
        // this is for the video uploads
        if (file.mimetype.startsWith("video")) {
            return cb(null, videoPath);
        }

       return cb(new Error("Unsupported file type"), false);
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "video/mp4",
    ]
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("only image and video file are allowed"),false);
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 20 * 1024 * 1024
    }
});

module.exports = upload;