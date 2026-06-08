require("dotenv").config();
const express = require("express");
const path = require("path");
const multer = require('multer')

const PORT = process.env.PORT;
const app = express();


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configure storage location using multer
const storage = multer.diskStorage({
    // Folder where uploaded files will be stored
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    // Generate a unique filename using timestamp
    filename: function (req, file, cb) {
        
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

// multer upload instance
const upload = multer({ storage: storage })

app.get("/", (req, res) => {
    return res.render("homepage")
})

app.post("/upload", upload.single("uploadfile"), (req, res) => {
    console.log("FILE =>", req.file);
    console.log("BODY =>", req.body);
    return res.send(`
        <h2>File Uploaded Successfully </h2>
        <p>File Name: ${req.file.filename}</p>
        <a href="/">Upload Another File</a>
    `);
})

app.listen(PORT, () => {
    console.log(`Server started successfully at port ${PORT}`);
})

