const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());


const router = require("./routes")
app.use("/", router)



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});