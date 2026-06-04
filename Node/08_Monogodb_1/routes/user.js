const express = require("express");
const {
    handleGetAllUsere,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
} = require("../controllers/user")

const router = express.Router();


// Routes for base path: /api/users
router.route("/")
    // get all users data
    .get(handleGetAllUsere)
    // create new user
    .post(handleCreateNewUser)


// Routes for parameterized path: /api/users/:id
router.route("/:id")
    // get user by id
    .get(handleGetUserById)
    // update user by id
    .patch(handleUpdateUserById)
    // delete user by id
    .delete(handleDeleteUserById)

module.exports = router;