const express = require("express");
const app = express();
const PORT = 8000;
const db= require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());

//router
const userRouter = require("./routes/user");
app.use("/user", userRouter);


app.use("*", (req,res) => {
    res.render("404");
});
db.sequelize.sync({force: false}).then( () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})
