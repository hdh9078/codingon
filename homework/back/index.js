const express = require("express");
const app = express();
const PORT = 8000;
const db= require("./models");


const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());

//router
const Router = require("./routes/main");
app.use("/", Router);


app.use("*", (req, res) => {
    res.send("404");
});
db.sequelize.sync({force: false}).then( () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})
