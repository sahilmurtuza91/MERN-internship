const mongoose = require("mongoose");
const Post = require("../models/post");

const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");
const User = require("../models/user");


const createPost = asyncHandler(async (req, res) => {

    // logged in user
    const userId = req.user._id;

    // caption from the body
    const { caption } = req.body;

    // check upload images
    if (!req.files || req.files.length === 0) {
        throw new ApiError(
            400,
            "At least one image is required",
        )
    }
    // convert upload file intp image path
    const images = req.files.map((file) =>
        file.path.replace(/\\/g, "/")
    )

    // create Post
    const post = await Post.create({
        userId,
        caption,
        image: images,
    })

    if (!post) {
        throw new ApiError(
            500,
            "Failed to create Post"
        )
    }
    res.status(201).json(
        new ApiResponse(
            201,
            "Post created successfully.",
            post
        )
    )
})

const getMyAllPost = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const posts = await Post.find({ userId })
        .sort({ createdAt: -1 })
        .populate("userId", "name username")
        .lean();

    if (posts.length === 0) {
        throw new ApiError(
            404,
            "No post found",
        );
    };

    return res.status(200).json(
        new ApiResponse(
            200,
            "All Post fetched successfully",
            posts
        )
    )
})


const getPostByUserId = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new ApiError(
            400,
            "Invalid Post Id",
        );
    };

    // check user Exist

    const user = await User.findById(userId);
    if (!user) {
        throw new ApiError(
            404,
            "User not found",
        )
    };

    // get user post
    const posts = await Post.find({ userId })
        .sort({ createdAt: -1 })
        .populate("userId", "name username ")
        .lean();

    if (posts.length === 0) {
        throw new ApiError(
            404,
            "User Post not found",
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            "User Posts fetched successfully",
            posts
        )
    );
})

const getFollowingPosts = asyncHandler(async (req, res) => {

    const loggedInUser = await User.findById(req.user._id)
        .select("following blockedUsers");

    if (!loggedInUser) {
        throw new ApiError(
            404,
            "User not found",
        )
    };

    // users whose posts can be shown
    const allowedUsers = [
        ...loggedInUser.following,
        loggedInUser._id
    ];

    // get all folloing post
    const posts = await Post.find({
        userId: {
            $in: allowedUsers,
            $nin: loggedInUser.blockedUsers,
        },
    })
        .populate("userId", "name username blockedUsers")
        .sort({ createdAt: -1 })
        .lean();

    const feed = posts.filter((post) => {
        return !post.userId.blockedUsers.some((id) =>
            id.toString() === loggedInUser._id.toString());
    })

    const formattedFeed = feed.map((post) => {
        delete post.userId.blockedUsers;
        return post;
    })
    return res.status(200).json(
        new ApiResponse(
            200,
            "Feed Fetched Successfully",
            formattedFeed,
        )
    );
});

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // logged in user
    const loggedInUserId = req.user._id;

    // check id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(
            400,
            "Invalid User Id",
        )
    };

    if (loggedInUserId.toString() === id) {
        throw new ApiError(
            400,
            "You can't block yourSelf",
        )
    };

    // Transaction start
    const session = await mongoose.startSession();
    session.startTransaction();

    try {

        // logged in User
        const loggedInUser = await User.findById(loggedInUserId).session(session);

        // target User
        const targetUser = await User.findById(id).session(session);
        if (!targetUser) {
            throw new ApiError(
                404,
                "user not found"
            )
        }

        if (loggedInUser.blockedUsers.some(userId => userId.toString() === id)) {
            throw new ApiError(
                400,
                "User already blocked",
            )
        };

        // remove from the follwoing
        loggedInUser.following.pull(id);

        // remove from the flower
        loggedInUser.followers.pull(id);

        // add to blocked list
        loggedInUser.blockedUsers.push(id);

        // Remove logged in user from target user's following
        targetUser.following.pull(loggedInUserId);

        // Remove logged in user from target user's followers
        targetUser.followers.pull(loggedInUserId);

        await loggedInUser.save({ session });

        await targetUser.save({ session });

        await session.commitTransaction();
        // await session.endSession();

        return res.status(200).json(
            new ApiResponse(
                200,
                "User blocked successfully",
            )
        )
    } catch (error) {
        await session.abortTransaction();
        // await session.endSession();
        throw error;
    } finally {
        await session.endSession();
    }
})

const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(
            400,
            "Invalid user Id",
        )
    };

    // logg in user Id
    const loggedInUserId = req.user._id;

    if (loggedInUserId.toString() === id) {
        throw new ApiError(
            400,
            "You cannot unblock yourself."
        );
    }

    const loggedInUser = await User.findById(loggedInUserId);

    const targetUser = await User.findById(id);
    if (!targetUser) {
        throw new ApiError(
            404,
            "User not found."
        );
    }
    const isBlocked = loggedInUser.blockedUsers.some(
        (userId) => userId.toString() === id
    );

    if (!isBlocked) {
        throw new ApiError(
            400,
            "User is not blocked."
        );
    }

    loggedInUser.blockedUsers.pull(id);

    await loggedInUser.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            "User unblocked successfully",
        )
    );

})

const userFollowing = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // login usr id
    const loggedInUserId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(
            400,
            "Invalid user ID",
        )
    };
    if (loggedInUserId.toString() === id) {
        throw new ApiError(
            400,
            "You cannot follow yourself."
        );
    }

    // Transaction start
    const session = await mongoose.startSession();
    session.startTransaction();
    try {

        const loggedInUser = await User.findById(loggedInUserId).session(session);

        // target user
        const targetUser = await User.findById(id).session(session);
        if (!targetUser) {
            throw new ApiError(
                404,
                "user not found"
            )
        }

        if (loggedInUser.following.some(userId => userId.toString() === id)) {
            throw new ApiError(
                400,
                "You already follow this user.",
            )
        };

        // Check if user is blocked
        if (loggedInUser.blockedUsers.some(userId => userId.toString() === id)) {
            throw new ApiError(
                400,
                "Unblock the user before following"
            )
        }

        // Check if target user blocked you
        if (targetUser.blockedUsers.some(userId => userId.toString() === loggedInUserId.toString())) {
            throw new ApiError(
                403,
                "You cannot follow this user.",
            )
        };

        // add to folloing
        loggedInUser.following.push(id);

        // Automatically add the logged-in user to the target user's followers
        targetUser.followers.push(loggedInUserId);

        await loggedInUser.save({ session });

        await targetUser.save({ session });

        await session.commitTransaction();
        // await session.endSession();

        return res.status(200).json(
            new ApiResponse(
                200,
                "User followed successfully.",
            )
        )
    } catch (error) {
        await session.abortTransaction();
        // await session.endSession();
        throw error;
    } finally {
        await session.endSession();
    }
})

module.exports = {
    createPost,
    getMyAllPost,
    getPostByUserId,
    getFollowingPosts,
    blockUser,
    unblockUser,
    userFollowing,
}