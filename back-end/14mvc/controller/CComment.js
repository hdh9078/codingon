const Comment = require("../model/MComment");

exports.main = (req, res) => {
    res.render("index");
};

exports.comments = (req, res) => {
    res.render("comments", {commentInfos: Comment.comments()});
};

exports.comment = (req, res) => {
    // console.log(req.params.id);
    const commentId = req.params.id;
    const comments = Comment.comments();
    console.log(comments[commentId -1]);
    res.render("comment", {commentInfo: comments[commentId -1]});
};


//실습
exports.pr1 = (req, res) => {
    res.render("post");
}
exports.pr2 = (req,res) => {
    const id = "hdh";
    const pw = "1234";
    if(id === req.body.username && pw === req.body.password) {
        res.send({result:true, userInfo: req.body});
    } else {
        res.send({result: false, userInfo: null});
    }
}