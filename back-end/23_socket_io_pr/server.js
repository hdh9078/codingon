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

io.on("connection", (socket) => {
    socket.on("message", (arg, cb) => { //message는 ejs의 emit이름과 같아야한다.
        console.log(arg);
        cb(arg);
    });
    socket.on("form_message", (arg) => {
        console.log(arg)
        socket.emit("backend_message", arg);
    });
    socket.on("form_message2", (arg2) => {
        console.log(arg2)
        socket.emit("backend_message", arg2);
    });
    socket.on("form_message3", (arg3) => {
        console.log(arg3)
        socket.emit("backend_message", arg3);
    })
});

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
