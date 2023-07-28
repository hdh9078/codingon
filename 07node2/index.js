const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");//서버에 속성지정
app.set("views", "./views");

//정적인 파일 불러오기
app.use("/public", express.static("./public"));
app.use("/image", express.static("./asd/abc"));

app.get("/", (req, res) => {
    res.render("실습과제1")
});

app.get("/kdt", (req, res) => {
    // res.render("test", {name:"Dongha"});
    res.render("실습과제8", {number:[1, 2, 3, 4, 5, 6 ,7 ,8, 9]})//구구단
});

app.get("/gugu", (req, res) => {
    res.render("gugu", {data:2, dan:5, leng:[1,2,3,4,5,6,7,8,9]});
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
}) //서버열기