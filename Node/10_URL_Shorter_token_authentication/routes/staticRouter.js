const express = require("express");
const URL =  require("../models/url")
const { restricTo } = require("../middlewares/auth")
const router = express.Router();


router.get("/admin/urls", restricTo(["ADMIN", "NORMAL"]), async(req, res)=>{
    const allurls = await URL.find({});
    return res.render("home", {urls:allurls});
})

router.get("/", restricTo(["ADMIN", "NORMAL"]), async(req, res)=>{
    try{
    const urls = await URL.find({createdBy: req.user._id});
    return res.render("home", {urls,})
    } catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
})
router.get("/signup", (req, res)=>{
    return res.render("signup")
})
router.get("/login",(req, res)=>{
    return res.render("login");
})

module.exports = router;