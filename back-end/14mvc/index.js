const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());

//임시 데이터
const comments = [
    {
        id: 1,
        userId: "Helloworld",
        date: "2023-08-01",
        comment: "안녕하세요",
    },
    {
        id: 2,
        userId: "Happy",
        date: "2023-08-02",
        comment: "반갑습니다",
    },
    {
        id: 3,
        userId: "Lucky",
        date: "2023-08-03",
        comment: "행복하세요",
    },
    {
        id: 4,
        userId: "Good",
        date: "2023-08-04",
        comment: "좋은하루~",
    },
];

app.get("/", (req, res) => {
    res.render("index");
});
//get /comments
app.get("/comments", (req, res) => {
    res.render("comments", {commentInfos: comments});
});
//get /comment/:id
app.get("/comment/:id", (req, res) => {
    // console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId -1]);
    res.render("comment", {commentInfo: comments[commentId -1]});
});
// * 맨마지막 선언
app.get("*", (req,res) => {
    res.render("404");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});