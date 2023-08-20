const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//로그인
router.get("/login", controller.get_login);
router.post("/login", controller.post_login);
//회원가입
router.get("/edit", controller.get_edit);
router.post("/edit", controller.post_edit);


module.exports = router;
