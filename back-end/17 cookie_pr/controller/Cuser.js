const model = require("../models");

exports.main = (req, res) => {
    res.render('User');
};


exports.post_signin = (req, res) => {
    const { id, pw } = req.body;
    model.User.findOne({
        where: { userid:id, pw },
    }).then((data) => {
        res.cookie("key", data.id);
        res.send({ result: true, data })
    });
};

exports.get_cookie = (req, res) => {
    const id = req.cookies.key
    model.User.findOne({
        where:{id}
    }).then((data) => {
        console.log(data)
        res.render("cookie", {data});
    })  
}

