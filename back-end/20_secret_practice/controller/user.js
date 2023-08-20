const { User } = require('../models');
const bcrypt = require("bcrypt");

exports.index = (req, res) => {
    res.render('index');
};

exports.get_login = (req, res) => {
    res.render("login");
};
//로그인
exports.post_login = async (req, res) => {
    const {userid, pw} = req.body;
    const result = await User.findOne({
        where: {userid}
    });
    if(!result) {
        res.json({result: false, message:"사용자가 존재하지 않습니다."});
    }
    const compare = comparePassword(pw, result.pw);
    if(compare) {
        res.json({result:true});
    } else {
        res.json({result:false, message:"비밀번호가 틀렸습니다."});
    };
};

exports.get_edit = (req, res) => {
    res.render("edit");
};
//회원가입
exports.post_edit = async (req, res) => {
    const {userid, pw, name} = req.body;
    const hashpw = bcyptPassword(pw);
    const result = await User.create({
        userid,
        name,
        pw:hashpw,
    });
    if(result) {
        res.json({result:true});
    };
};


//단방향
const bcyptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};
const comparePassword =(password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}