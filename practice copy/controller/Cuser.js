const model = require("../models");

exports.main = (req, res) => {
    res.render("User");
};

exports.post_login = (req, res) => {
    const {id, pw} = req.body;
    model.User.fondeOne({
        where:{userid:id, pw}
    }).then((data) => {
        res.cookie("key", data.id)
        res.send({result:true, data})
    })
}