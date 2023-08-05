const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extend:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/axios", (req, res) => {
    res.send(req.query);
})
app.get("/log", (req, res) => {
    res.render("index2");
})
app.post("/axios", (req, res) => {
    const id ="hdh";
    const pw = "123"
    if (id === req.body.id && pw ===req.body.pw) {
        res.send({result:true, userInfo: req.body})
    } else {
        res.send({result:false, userInfo: null})
    }
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});