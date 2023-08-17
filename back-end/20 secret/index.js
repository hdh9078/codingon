const express = require("express");
const crypto = require("crypto");
const app = express();
const PORT = 8000;
let pass = ""
const salt = crypto.randomBytes(16).toString("hex"); //솔트생성
const leng = 1000; //반복횟수
const key = 64; //생성할 키의 길이
const algo = "sha512";


app.unsubscribe(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/login", (req, res) => {
    const {pw} = req.body;
    //createrHash: 지정한 알고리즘(sha512)을 이용하여 해시 생성
    // const password = crypto.createHash("sha512").update(pw).digest("base64");
    //pdkdf2(pdkdf2 Sync는 동기): 비밀번호 기반 키 도출함수
    pass = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString("base64");
    res.send(pass);
});

//검증
app.post("/verify", (req, res) => {
    const {pw} = req.body;
    const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo);
    //기본적인 방법 [compare 맨뒤에 .toString("base64")해줘야한다]
    // if(compare === pass) {
    //     res.send(true);
    // } else {
    //     res.send(false);
    // }
    //timingSafeEqual: 두 개의 buffer를 상수시간으로 비교하는 함수
    const result = crypto.timingSafeEqual(compare, Buffer.from(pass, "base64"));
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});