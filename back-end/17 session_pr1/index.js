const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    name: "Hwang",
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000,
    }
}));

const userInfo = {id: "kdt9", pw: "1234"};

app.get("/", (req ,res) => {
    const user = req.session.user;
    console.log(user);
    if(user === undefined) {
        res.render("index", {isLogin: false});
    } else {
        res.render("index", {isLogin: true, user});
    }
    
});
app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    //로그인이 되는경우
    if(req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
        req.session.user = req.body.id;
        res.redirect("/");
    } else {
        res.send(`<script>alert("로그인실패"); document.location.href="/";</script>`);
    };
});

app.get("/logout", (req ,res) => {
    const user = req.session.user;
    if(user===undefined) {
        res.send(`<script>alert("잘못된 접근입니다"); document.location.href="/";</script>`);
    } else {
        req.session.destroy( () => {
            // res.clearCookie("Hwang") 쿠키도 지운다 여기선 안되더라
            res.redirect("/");
        });
    };
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});