const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views")

app.use("/image", express.static("./asd/abc"));
app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
    res.render("app" , {day:"불금"})
})

app.get("/hi", (req, res) => {
    res.render("hi")
})

app.get("/hihi", (req, res) => {
    res.render("실습과제1")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})