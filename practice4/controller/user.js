const { User } = require('../models');
const bcrypt = require("bcrypt");

exports.main = (req, res) => {
    res.render("index");
};

exports.getLogin = (req, res) => {
    res.render("login");
};
exports.postLogin = async (req, res) => {
    const {userid, pw} = req.body;
    const result = await User.findOne({
        where: {userid}
    });
    if(!result) {
        res.json({result:false, message:"사용자가 존재하지 않습니다."})
    };
    const compare = comparePassword(pw, result.pw);
    if(compare) {
        res.json({result:true})
    } else {
        res.json({result:false, message:"아이디나 비밀번호가 틀렸습니다."})
    }
};

exports.getEdit = (req, res) => {
    res.render("edit");
};
exports.postEdit = async (req, res) => {
    const {userid, pw, name} = req.body;
    const hashpw = bcyptPassword(pw)
    const result = await User.create({
        userid,
        pw:hashpw,
        name,
    });
    if(result) {
        res.json({result:true});
    }
};

const bcyptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};

const comparePassword = (password, dbPasword) => {
    return bcrypt.compareSync(password, dbPasword);
}