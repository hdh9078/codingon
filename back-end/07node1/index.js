// const mod = require("./module");
// console.log(mod); // a만 부르고 싶을때 mod.a

// const {a, b} = require("./module");
// console.log(a, b)

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    // res.writeHead(200)
    // res.write("<h1>Hello World</h1>")
    // res.end("<p>End</p>")

    //파일전송
    try {
        const data = fs.readFileSync("./index.html"); 
        res.writeHead(200)
        res.end(data)
    } catch (error) {
        console.log(error)
        res.writeHead(404)
        res.end(error.message)
    }
});

server.listen(8000, function() {
    console.log("8000번 포트 ㄱㄱ");
});
