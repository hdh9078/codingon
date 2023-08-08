const User = require("../model/User")

exports.index = (req, res) => {
    res.render("index");
};

exports.signup = (req, res) => {
    res.render("signup");
}

exports.post_signup = (req ,res) => {
    User.post_signup(req.body, () => {
        res.send({result: true});
    })
}

exports.signin = (req, res) => {
    res.render("signin");
};

exports.post_signin = (req, res) => {
    User.post_signin(req.body, (result) => {
        if(result.length > 0) {
            res.cookie("key", result[0].id);
            res.send({result:true, data: result[0]})
        } else {
            res.send({result:false, data: null});
        }
    })
}

exports.get_profile = (req, res) => {
    //브라우저가 보낸 쿠키를 까서 유저 아이디를 얻어낸다.
    const id = req.cookies.key
    //유저 아이디를 통해서 유저를  sql에서 얻어낸다.
    User.get_profile(id, (result) => {
        const user = result[0];
        res.render("profile", {user});
    })
    //유저정보를 ejs에 넘긴다.

    //ejs에서 유저정보를 통해 화면을 그린다.
}

exports.patchUser = (req,res) => {
    User.patchUser(req.body, () => {
        res.send({result: true});
    })
};

exports.deleteUser = (req, res) => {
    User.deleteUser(req.body, () => {
        res.send({result: true});
    });
};
    
