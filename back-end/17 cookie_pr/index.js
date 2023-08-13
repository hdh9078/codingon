const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;
const db = require("./models")

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(cookieParser());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/clearCookie", (req, res) => {
    res.clearCookie("key");
    res.render("User");
});

const userRouter = require("./routes");
app.use("/user", userRouter)


db.sequelize.sync({force:false}).then( () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});