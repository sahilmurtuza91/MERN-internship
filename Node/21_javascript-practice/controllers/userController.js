const users = require("../data/users");

const getUserByEmail = (req, res)=>{
    const {email} = req.params;

    // find
    const user = users.find((user)=>{
        return user.email === email;
    });

    res.status(200).json({
        success:true,
        user:user,
    })
}

const sendNotification = (req, res)=>{

    // forEach
    users.forEach((user)=>{
        console.log(`Email sent to ${user.email}`);
    });
    res.status(200).json({
        success:true,
        Message:"Notification sent to user",
    })
}

const getuserData = (req, res)=>{
    const user = users[0];

    // object keys()
    const keys = Object.keys(user);

    // object values
    const values = Object.values(user);

    res.status(200).json({
        success:true,
        key:keys,
        values:values,
    });
}

module.exports = {
    getUserByEmail,
    sendNotification,
    getuserData,
}