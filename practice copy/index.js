const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models")

app.set("view engine", "ejs");
app.set("views", "./views");

app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

const visitorRouter = require("./routes/visitor");
app.use("/visitor", visitorRouter);

db.sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
