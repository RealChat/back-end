const UserController = require("../controllers/UserController");

class SocketHandler {
    constructor(io) {
        this.io = io;
        this.init();
        this.users = {};
        this.activeUsers = [];
    }
    init() {
        this.io.on("connection", (socket) => {
            socket.on("join", this.onJoin.bind(this, socket));
            socket.on("message", this.onMessage.bind(this, socket));
            socket.on("disconnect", this.onLeave.bind(this, socket));
            console.log("New connection:", socket.id);
        });
    }
    async onJoin(socket, data) {
        this.users[data._id] = socket.id;

        console.log("New user:", data);

        const exists = this.activeUsers.find((u) => u._id == data._id);
        if (!exists) {
            this.activeUsers.push(data);
        }
        let allusers = await UserController.getUsers();
        allusers = allusers.map((user) => ({
            ...user._doc,
            online: !!this.activeUsers.find((u) => u._id == user._id),
        }));
        console.log(allusers[0]._id.toString(), data._id);
        this.io.to(socket.id).emit(
            "allUsers",
            allusers.filter((u) => u._id.toString() !== data._id)
        );
    }
    getUserBySocket(socketId) {
        const user = [...Object.entries(this.users)].find(
            (user) => user[1] == socketId
        );
        if(user)
        return this.activeUsers.find((u) => u._id == user[0]);
        else return null
    }
    onMessage(socket, data) {
        console.log(data);
        socket.to(this.users[data.to]).emit("receiveMessage", {
            text: data.text,
            from: this.getUserBySocket(socket.id)._id,
        });
    }
    onLeave(socket) {
        console.log(socket.id, "left");
        const userLeft = [...Object.entries(this.users)].find(
            (user) => user[1] == socket.id
        );
        if (!userLeft) return;
        this.users[userLeft[0]] = undefined;
        this.activeUsers = this.activeUsers.filter(
            (user) => user._id !== userLeft[0]
        );
        console.log(this.activeUsers);
    }
}

module.exports = SocketHandler;
