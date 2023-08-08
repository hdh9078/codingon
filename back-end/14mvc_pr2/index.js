const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");


app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());

const Router = require("./routes");
app.get("/", (req, res) => {
    res.render("index");
});

app.use("/", Router); //localhost:8000/visitor로 시작하는 것들

app.use("*", (req,res) => {
    res.render("404");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});