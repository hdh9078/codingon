const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const PORT = 8000;
const app= express();

//http서버
const server = http.createServer(app);
//socket서버
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("client");
});
app.get("/p1", (req, res) => {
    res.render("practice1"); //실습
});
app.get("/chat", (req, res) => {
    res.render("chat");//채팅방
})

io.on("connection", (socket) => {
    //////////////////////설명////////////////////////////////
    // socket.on("message", (arg, cb) => { //message는 ejs의 emit이름과 같아야한다.
    //     console.log(arg);
    //     cb(arg);
    // });
    // socket.on("form_message", (arg) => {
    //     console.log(arg);
    //     socket.emit("backend_message", arg);
    // })
    //////////////////////설명////////////////////////////////

    ////////////////////////실습//////////////////////////////
    // socket.on("hello", (arg) => {
    //     console.log(`${arg.name}: ${arg.message}`);
    //     socket.emit("cbHello", {name: "server", message:"hello"})
    // })
    // socket.on("study", (arg) => {
    //     console.log(`${arg.name}: ${arg.message}`);
    //     socket.emit("cbStudy", {name: "server", message:"study"})
    // })
    // socket.on("bye", (arg) => {
    //     console.log(`${arg.name}: ${arg.message}`);
    //     socket.emit("cbBye", {name: "server", message:"bye"})
    // })
    //////////////////////실습/////////////////////////////////
    
    console.log("join 전", socket.rooms);
    socket.on("join", (res) => {
        //채팅방을 생성하는 방법은 join(방아이디) 사용. 방이 존재하면 그 방으로 접속// res는 prompt로 보낸 방 이름
        socket.join(res);
        socket.room = res;
        console.log("join 후", socket.rooms);
        //broadcast는 나를 제외한 전체사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit("create", "새로운 브라우저가 입장하였습니다.");
        // console.log(socket);
        const roomInfo = io.sockets.adapter.rooms.get(res)?.size;
        console.log(roomInfo);
    });
    socket.on("message", (res) => {
        //io.to(특정방아이디).emit(이벤트) 특정방의 전체 사용자에게 메세지 전달
        io.to(socket.room).emit("chat", res, socket.id);
    });
    socket.on("leave", () => {
        socket.leave(socket.room);
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)?.size;
        console.log(roomInfo);
    })

});

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
