const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extend:true}));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req,res) => {
    res.render("pr");
});
app.get("/log", (req,res) => {
    res.render("pr2");
});

app.get("/axios", (req, res) => {
    res.send(req.query);
});
app.post("/axios", (req, res) => {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});