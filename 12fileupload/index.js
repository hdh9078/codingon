const express = require('express');
const multer = require("multer");
const path = require("path");//폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');

//views라는 설정을 다른 폴더로 바꿀때 쓰는 옵션
//views라는 폴더를 기본으로 사용할때는 생략이 가능.
// app.set("views", "./views");

//body-parser
//req.body, 즉 post 전송일 때 사용
app.use(express.urlencoded({ extended: true }));
//extended:중첩된 객체표현을 허용할지 말지 정함
//application/x-www-form-urrlencoded

app.use(express.json());
//application/json

//정적파일 설정
//서버실행시 http://loaclhost:8000/uploads/파일명 이렇게 나온다 앞 uploads는 url 뒤에 파일uploads
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer설정
//diskStorage: 파일저장관련객체
const storage = multer.diskStorage({
    //destination: 저장될 경로를 지정(요청객체, 업로드된 파일객체, 콜백함수)
    destination: (req, file, done) => {
        done(null, "uploads/");
    },
    //filenmae: 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename: (req, file, done) => {
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");//파일명한글로나오게
        //extname:확장자를 추출
        const ext = path.extname(file.originalname);
        //basename:파일이름추출(파일이름, 확장자) => 확장자를 제외해서 파일이름이 추출
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        done(null, newName);
    }
});

//파일크기제한
const limits = {
    fileSize: 5 * 1024 * 1024 //5mb
};
//key-value에서 key값과 value이 변수가 동일하면 합칠 수 있음 ({storage:uploadDetail, limits: limits})를 uploadDetail을 storage로 바꿔주고 아래처럼 변경
const upload = multer({storage, limits});

//싱글
app.post("/upload", upload.single("userfile", ),(req, res) => {
    console.log(req.file);
    res.send(req.body);
});

//멀티(ver1): array() array()속 숫자는 최대파일 업로드 갯수
app.post("/upload/array", upload.array("userfiles", 2), (req, res) => {
    console.log(req.files);
    res.send(req.body);
})
//멀티(ver2): fields() maxCount는 최대 파일 업로드 갯수
app.post("/upload/fields", upload.fields([{name:"userfile1", maxCount: 2}, {name:"userfile2"}]), (req, res) => {
    console.log(req.files);
    res.send(req.body);
});

//동적(비동기)파일
app.post("/dynamic", upload.single("dynamic"), (req, res) => {
    console.log(req.file);
    res.send(req.file);
})


//페이지를 지정할 때는 미들웨어 use 사용
app.get('/', (req, res) => {
    res.render('index');
});
//use는 http전송방식을 이해하지 못함.
//같은 url로 get, post를 만들 수 있지만 use로는 접근이 힘듦.
//예를들어 get 방식의 "/login"과 post방식의 "/login"은 다른 페이지이지만
//use는 동일한 페이지로 인식
//use는 404 에러페이지일떄 사용
app.use("*", (req, res) => {
    res.render("404")
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
