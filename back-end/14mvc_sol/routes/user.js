const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.index);

//get localhost:8000/user/signup
router.get("/signup", controller.signup);
//post 
router.post("/signup", controller.post_signup);

router.get("/signin", controller.signin);

router.post("/signin", controller.post_signin);

router.get("/profile", controller.get_profile);

router.post("/profile/edit", controller.patchUser);

router.delete("/profile/delete", controller.deleteUser);

module.exports = router;