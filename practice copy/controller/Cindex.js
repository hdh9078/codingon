const user = require("../model/Muser");

exports.main = (req, res) => {
    res.render("index");
};

exports.getUser = (req, res) => {
    user.getUser((rows) => {
        res.render("signup", {data:rows})
    })
}

exports.postUser = (req, res) => {
    user.postUser((req.body), (result) => {
        res.send({id:result.insertId, name:req.body.name, password:req.body.pw})
    })
}