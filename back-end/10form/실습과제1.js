const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extend:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("get", {title:"FORM전송"});
})
app.get("/get", (req, res) => {
    console.log(req.query);
    res.render("getresult", {
        title: "Get요청 폼 결과 확인",
        userInfo: req.query,
    });
})
app.post("/post", (req, res) => {
    console.log(req.body);
    res.render("getresult", {
        title:"Post요청 폼 결과 확인하기",
        userInfo: req.body,
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});