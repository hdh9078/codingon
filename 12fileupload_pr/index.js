const express = require('express');
const multer = require("multer");
const path = require("path");//폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer설정
const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, "uploads/");
    },
    filename: (req, file, done) => {
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");//파일명한글로나오게
        const ext = path.extname(file.originalname);
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        done(null, newName);
    }
});

const limits = {
    fileSize: 5 * 1024 * 1024 //5mb
};

const upload = multer({storage, limits});




//동적(비동기)파일
app.post("/upload", upload.array("dynamic"), (req, res) => {
    res.send(req.files);
})



app.get('/', (req, res) => {
    res.render('index');
});

app.use("*", (req, res) => {
    res.render("404")
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
