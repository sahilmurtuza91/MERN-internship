const User = require("../models/user");

async function handleGetAllUsere(req, res) {
    const usersData = await User.find({});
    if (!usersData || usersData.length === 0) {
        return res.status(404).json({
            message: "Users not found",
        })
    }
    res.status(200).json(usersData);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({
            message: "user not found",
        });
    }
    return res.status(200).json(user)
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "ChnagesLastName" });
    return res.json({
        status: "Sucess",
    });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({
        status: "Sucess",
    })
}

async function handleCreateNewUser(req, res) {
    try {
        const body = req.body;

        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
        });

        // console.log("result: ", result);

        return res.status(201).json({
            message: "Success",
            data: result,
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message,
        })
    }
}

module.exports = {
    handleGetAllUsere,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}