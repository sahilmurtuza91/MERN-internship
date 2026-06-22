const File = require("../models/fileModel")

const uploadFile = async(req, res)=>{
    try{
        if(!req.file){
            return res.status(400).json({
                success:true,
                statusCode:400,
                message:"File is required",
            });
        }

        const savedFile = await File.create({
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: req.file.size
        });


        res.status(200).json({
            success:true,
            statusCode:200,
            message:"file upload successfully",
            file:savedFile
        })

    } catch(error){
        res.status(500).json({
            success:false,
            statusCode:500,
            message:error.message,
        });
    }
}

module.exports = {
    uploadFile,
}