const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(cookieParser("asdfg"));

const cookieConfig = {
    httpOnly:true,
    maxAge: 60 * 1000,
    signed:true,
};

app.get("/", (req ,res) => {
    res.cookie("myCookie", "myValue", cookieConfig);
    res.render("cookie");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});



	
