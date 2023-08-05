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
const upload = multer({
    dest: "uploads/"//업로드 할 파일을 저장할 경로를 지정 파일 자동 생성
});
const uploadDetail = multer({
    //storage: 저장할 공간에 대한 정보
    //diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "uploads/");//경로지정
        },
        filename(req, file, done) {
            file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");//파일명한글로나오게
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});

//router
app.get("/", (req,res) => {
    res.render("index");
});

//싱글
app.post("/upload", uploadDetail.single("userfile"), (req,res) => {
    console.log(req.file);
    console.log(req.body);
})

//멀티(ver1)
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
    console.log(req.files);
    console.log(req.body);
});
//멀티(ver2)
app.post("/upload/fields", uploadDetail.fields([{name: "userfile1"}, {name: "userfile2"}]), (req, res) => {
    console.log(req.files);
    console.log(req.body);
});

//동적
app.post("/dynamicFile", uploadDetail.single("dynamic-file"), (req, res) => {
    console.log(req.file);
    res.send(req.file);
})



//server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});