const express = require("express");
const fs = require("fs");
const users = require('./MOCK_DATA.json');
const app = express();
const port = 8000;

// middleware
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next)=>{
//     console.log("This is the first custome middleware")
//     next();
//     // if we don't use the Next then it hang at that place and don't move to the next middle ware aor route
// })

app.use((req, res, next)=>{
    console.log("This the first middleware 1");
    console.log(req.headers);
    next();
})

app.use((req, res, next)=>{
    fs.appendFile("./log.text", `${Date.now()}: IP Address: ${req.ip} : ${req.method}: ${req.path} \n`,(err)=>{
        if(err){
            return res.status(404).json({
                message:"Not found",
            });
        }
        next();
    })
})

app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})


// REST API
app.get("/api/users", (req, res) => {
    res.setHeader("X-myName", "Sahil");
    // Alway write the custome header starting with X-
    return res.json(users);
});


app.post("/api/users", (req, res) => {
    const body = req.body;
    // console.log(body)
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "Succes", id: users.length });
    });
});

// common routes are grouped
app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(user)
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const body = req.body;
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            return res.status(404).json({
                message: "user not found",
            })
        }
        users[userIndex] = {
            ...users[userIndex],
            ...body,
        };
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                res.status(500).json({
                    message: "Updating Error",
                });
            }
            return res.json({
                status: "Success",
                id: id,
            })
        })
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const isUserExit = users.find((user) => user.id === id);
        if (!isUserExit) {
            return res.status(404).json({
                message: "users not found",
            });
        }
        const UpdateUsers = users.filter((user) => user.id !== id);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(UpdateUsers), (err) => {
            if (err) {
                res.status(500).json({
                    message: "Error deleting user",
                })
            }
            return res.status(200).json({
                status: "Success",
                message: "User deleted",
            })
        })

    })

app.listen(port, () => { console.log(`Server started at the poart ${port}`) });