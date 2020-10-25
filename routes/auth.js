const User = require("../models/user");
const users = require("../mocks/users");
const UserController = require("../controllers/UserController");

const app = require("express").Router();

app.get("/users", (req, res) => {
    UserController.getUsers().then((result) => {
        res.send(result);
    });
});

app.post("/signup", (req, res) => {
    UserController.storeUser(req.body)
        .then((result) => {
            res.send({
                message: "User registered successfully",
                id: result._id,
            });
        })
        .catch((error) => {
            res.send({
                error: error.message,
            });
        });
});

app.post("/login", (req, res) => {
    const newUser = req.body;
    console.log(req.body);
    UserController.getUser(newUser.email).then((result) => {
        if (!result) {
            // res.send({error:"No user exists with given email"});
            res.send({ error: "Invalid username or password" });
        }
        if (result.password == newUser.password) {
            result.password = undefined;
            // delete result.password;
            res.send({ message: "Logged in successfully", user: result });
        } else {
            res.send({ error: "Invalid username or password" });
        }
    });
});

module.exports = app;
