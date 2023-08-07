const Visitor = require("../model/Visitior");

exports.main = (req, res) => {
    res.render("index");
};

exports.getVisitors = (req, res) => {
    res.render("visitor", {data: Visitor.getVisitoers()});
};