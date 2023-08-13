const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

//get /visitor 방명록 전체보기
router.get("/", controller.getVisitors);
// get /visitor/get 방명록 하나 조회
router.get("/get", controller.getVisitor);
//post visitor.write 방명록 하나 생성
router.post("/write", controller.postVisitor);
// //patch visitor/edit 방명록 하나 수정
router.patch("/edit", controller.patchVisitor);
// //delte visitor/delete 방명록 하나 삭제
router.delete("/delete", controller.deleteVisitor);

module.exports = router;