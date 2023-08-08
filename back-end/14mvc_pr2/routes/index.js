const express = require("express");
const controller = require("../controller/Cindex");
const router = express();

router.get("/", controller.main);

router.get("/user/signup", controller.getUser);

router.post("/user/signup", controller.postUser);


module.exports = router;