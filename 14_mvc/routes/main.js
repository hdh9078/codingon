const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');


router.get("/", controller.main);
//전체목록보기
router.get("/comments", controller.comm);
//상세보기
router.get("/comment/:id", controller.comment);


module.exports = router;
