class SocketHandler{
    constructor(io){
        this.io = io;
        this.init()
        this.users = [];
    }
    init(){
        this.io.on("connection",(socket)=>{
            this.onJoin(socket);
            this.onMessage(socket);
            console.log("SNew connection:",socket.id);
        })
    }
    onJoin(socket){
        socket.on("join",data=>{
            this.users.push(data);
            console.log("New user:"+data.name);
        })
    }
    onMessage(socket){
        socket.on("message", data => {
            //database operation
            /*
            {
                type:"text|image|song|doc"
                content:"",
                senderId:,
                receiverId:
            }
            */
            socket.broadcast.emit("sentMessage",{
                text:data.text,
                //sender:this.users.find(user=>user.id==data.sender).name,
                //receiver:this.users.find(user=>user.id==data.receiver).name
            });
        });
    }
}

module.exports = SocketHandler