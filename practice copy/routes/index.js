const express = require("express");
const router = express.Router();
const controller = require("../controller/Cindex");

router.get("/", controller.main);
router.get("/user/signup", controller.getUser);
router.post("/user/signup", controller.postUser);

module.exports = router;