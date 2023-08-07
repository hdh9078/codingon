const express = require("express");
const router = express.Router();
const controller = require("../controller/CComment");

router.get("/", controller.main);
//get /comments
router.get("/comments", controller.comments);
//get /comment/:id
router.get("/comment/:id", controller.comment);


//실습
router.get("/axiosPost", controller.pr1);
router.post("/resultPost", controller.pr2);

module.exports = router;