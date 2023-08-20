const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get("/", controller.main);
//로그인
router.get("/login", controller.getLogin);
router.post("/login", controller.postLogin);
//회원가입
router.get("/edit", controller.getEdit);
router.post("/edit", controller.postEdit);

module.exports = router;
