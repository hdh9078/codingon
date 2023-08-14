const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(cookieParser());
const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 1000,
}


app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/", (req, res) => {
    res.render("index", {popup: req.cookies.modal});
})

app.get("/", (req, res) => {
    res.render("index");
});


app.post("/setCookie", (req, res) => {
    //쿠키생성
    res.cookie("modal", "hide", cookieConfig);
    res.send({result:true, msg: "쿠키 생성 완료"});
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});