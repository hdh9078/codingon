const model = require('../model/Model');


////////////////////////////////
//GET
//메인페이지
exports.main = (req, res) => {
    res.render('index');
};
//회원가입페이지
exports.signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
exports.signin = (req, res) => {
    res.render('signin');
};

///////////////////////////////
//POST
//회원가입
exports.post_signup = (req, res) => {
    model.db_signup(req.body, () => {
        res.json({result: true})
    })
}
//로그인
exports.post_signin = (req, res) => {
    model.db_signin(req.body, (result) => {
        if(result.length > 0) {
            res.json({result: true, data:result[0]})
        } else {
            res.json({result:false})
        }
    })
}
//전체정보조회
exports.infor = (req, res) => {
    model.infor((result) => {
        res.send({data:result})
    })
}
//정보조회
exports.profile = (req, res) => {
    model.profile(req.params, (result) => {
        res.render("profile", {data:result[0]})
    })
}

//수정

