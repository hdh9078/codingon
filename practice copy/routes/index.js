const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/login", controller.main);
router.post("/login", controller.post_login);
router.get("/cookie", controller.get_cookie);

module.exports = router;