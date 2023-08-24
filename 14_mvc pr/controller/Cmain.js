const model = require('../model/Model');

exports.main = (req, res) => {
    res.render("index");
};

exports.comments = (req, res) => {
    res.render("comments", {lists: model});
};

exports.register = (req, res) => {
    const {name, major, gender} = req.body;
    model.push({
        id: model.length + 1,
        name,
        major,
        gender,
    });
    res.json({result:true})
};