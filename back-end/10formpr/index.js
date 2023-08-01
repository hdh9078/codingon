const express = require("express")
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extend:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/get", (req, res) => {
    res.render("get", {title:"폼 전송 실습"});
})

app.get("/post", (req,res) => {
    res.render("post", {title:"폼 전송 실습"});
})

app.get("/getPage", (req, res) => {
    res.render("getResult", {
        title: "Get 요청 결과",
        userInfo: req.query,
    })
})

app.post("/postPage", (req, res) => {
    res.render("postResult", {
        title:"Post 요청 결과",
        userInfo: req.body,
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})