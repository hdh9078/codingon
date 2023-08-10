const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");


app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());



// const indexRouter = require("./routes");
// app.use("/", indexRouter);
const visitorRouter = require("./routes/visitor");
app.get("/", (req, res) => {
    res.render("index");
});

app.use("/visitor", visitorRouter); //localhost:8000/visitor로 시작하는 것들

app.use("*", (req,res) => {
    res.render("404");
});


// force false(기본값)는 테이블이 없으면 생성 테이블 있으면 data 넣어줌 true면 있는 테이블 지우고 생성
db.sequelize.sync({force:false}).then( () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
