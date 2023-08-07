const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);


//실습
router.get("/axiosPost", controller.pr1);
router.post("/resultPost", controller.pr2);

module.exports = router;