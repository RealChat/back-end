const User = require("../models/user")

const UserController = {}

UserController.getUsers = ()=>{
    return User.find()
}

UserController.getUser = (email)=>{
    return User.findOne({email})
}

UserController.storeUser = (user)=>{
    const newUser = new User(user)
    return newUser.save()
}

module.exports = UserController