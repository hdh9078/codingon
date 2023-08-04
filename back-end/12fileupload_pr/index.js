const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extend:true}));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//정적파일
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "uploads/");
        },
        filename(req, file, done) {
            file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
            const ext = path.extname(file.originalname);
            done(null, req.body.userId + ext);
        },
    }),
    limits: {fileSize: 10 * 1024 * 1024}
})
//router
app.get("/", (req,res) => {
    res.render("index"); 
});

app.post("/result", uploadDetail.single("profile"), (req, res) => {
    res.render("result", {
        userInfo: req.body,
        profile: req.file.path,
    });
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});