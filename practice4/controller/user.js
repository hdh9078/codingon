const { User } = require('../models');
const bcrypt = require("bcrypt");

exports.main = (req, res) => {
    res.render("index");
};

exports.getLogin = (req, res) => {
    res.render("login");
};
exports.postLogin = (req, res) => {
    const {id, pw} = req.body;
    
};

exports.getEdit = (req, res) => {
    res.render("edit");
};
exports.postEdit = (req, res) => {

};