const User = require("../model/Muser");

//실습
exports.main = (req, res) => {
    res.render("index")
};

exports.pr1 = (req, res) => {
    res.render("post");
};

exports.pr2 = (req, res) => {
    console.log(User.user().id);
    if(User.user().id === req.body.username && User.user().pw === req.body.password) {
        res.send({result:true, userInfo: req.body});
    } else {
        res.send({result: false, userInfo: null});
    }
};