const express = require("express");
const app = express();
const PORT = 8000;
const db= require("./models");
const cors = require("cors");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS오류방지
app.use(cors({credentials: true, origin: "http://localhost:3000"}));

//router 분리
const router = require("./routes");
app.use("/", router);

//오류처리
app.use("*", (req, res) => {
    res.send("404");
});
db.sequelize.sync({force: false}).then( () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

