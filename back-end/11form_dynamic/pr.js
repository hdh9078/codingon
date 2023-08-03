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
    const id = "hdh";
    const pw ="1234";
    if(id === req.body.id && pw === req.body.pw) {
        res.send({result:true, userInfo: req.body});
    } else {
        res.send({result:false, userInfo: null});
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});