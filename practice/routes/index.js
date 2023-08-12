const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);

router.get("/axiosPost", controller.pr1);
router.post("/resultPost", controller.pr2);

module.exports = router;