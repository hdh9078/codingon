const ws = require("ws");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("client");
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//웹소켓 서버 접속
const wss = new ws.Server({server});
//브라우저(클라이언트)들을 담을 배열변수
const sockets = [];
//socket변수는 접속한 브라우저
wss.on("connection", (socket) => {
    sockets.push(socket);
    
    //메세지 이벤트
    socket.on("message", (message) => {
        const msg = JSON.parse(message);
        res.json(`${msg.user}: ${msg.message}`);
    });
    //오류이벤트
    socket.on("error", (err) => {
        console.log("에러가 발생하였습니다", err);
    });
    //접속종료이벤트
    socket.on("close", () => {
        console.log("클라이언트와 연결이 종료되었습니다.");
    });
});