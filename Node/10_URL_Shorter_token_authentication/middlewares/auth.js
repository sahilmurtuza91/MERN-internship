const { getUser } = require("../service/auth")


// async function restrictToLoggedinUserOnly(req, res, next) {
//     const token = req.cookies.uid;

//     if (!token) {
//         return res.redirect("/login");
//     }
//     const user = getUser(token);

//     if (!user) {
//         return res.redirect("/login");
//     }
//     req.user = user;
//     next();
// }


// async function checkAuth(req, res, next) {
//     const userUid = req.cookies.uid;

//     const user = userUid
//         ? getUser(userUid)
//         : null;

//     req.user = user;
//     next();
// }

function checkForAuthentication(req, res, next) {
    req.user = null; // initialy no user is logged in

    const token = req.cookies.uid;

    if (!token) {
        return next();
    }

    const user = getUser(token);
    if (!user) {
        return next();
    }
    req.user = user;
    return next();

}


function restricTo(roles = []) {
    return function (req, res, next) {
        if (!req.user) {
            return res.redirect("/login")
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).end("Unauthorized");
        }
        return next();
    }
}

module.exports = {
    checkForAuthentication,
    restricTo,
}