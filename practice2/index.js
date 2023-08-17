const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");

app.use(cookieParser());
app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());

const userRouter = require("./routs");
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
