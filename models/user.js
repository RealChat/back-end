const mongoose = require("mongoose")
const { Schema } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    password: String,
    username: String
})

const userModel = mongoose.model("User", UserSchema)

module.exports = userModel