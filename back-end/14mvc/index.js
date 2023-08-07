const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());


const router = require("./routes")//index생략가능 이렇게 하면 기본적으로 index파일을 찾는다
app.use("/", router);
//example)
//const userRouter = require("./routes/user")
//app.use("/user", userRouter)



// * 맨마지막 선언
app.use("*", (req,res) => {
    res.render("404");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});