const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');


router.get("/", controller.main);
//전체목록보기
router.get("/comments", controller.comments);
//회원정보추가
router.post("/register", controller.register);


module.exports = router;
