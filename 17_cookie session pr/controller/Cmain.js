//const model = require('../model/Model');
//models/index에서 index는 생략
const { User } = require('../models');
const bcrypt = require("bcrypt");

//쿠키설정
const cookieConfig = {
    httpOnly:true,
    maxAge: 60 * 1000, //1분
};

//GET
//메인페이지
const main = (req, res) => {
    if(req.cookies.login) {
        //쿠키가 존재한다면 로그인 되어있는 상태
        res.render("index");
    } else {
        //쿠키가 없으면 비로그인 => alert창 띄우기
        res.render('index', {cookie: false});
    };
};
//회원가입페이지
const signup = (req, res) => {
    //쿠키생성
    //res.cookie(쿠키이름, 쿠키값, 옵션객체)
    // res.cookie("testCookie", "signup", cookieConfig);//응답하는 쿠키라서 res.cookie 하여 쿠키 생성
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    console.log(req.session.userInfo, req.sessionID);
    if(req.session.userInfo) {
        res.redirect(`/profile/${req.session.userInfo.id}`);
    } else {
        res.render('signin');
    }
}

//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    //findOne은 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체반환
    //where: 는 객체형태로 찾을 정보를 입력
    User.findOne({
        where: { id: req.params.number },
    }).then((result) => {
        res.render('profile', { data: result });
    });
};

//전체회원조회
const members = (req, res) => {
    if(req.session.userInfo) {
        User.findAll().then((result) => {
            res.render("members", {name: req.session.userInfo.name, result});
        })
    } else {
        res.redirect("/signin")
    }   
}

//POST
//회원가입
// const post_signup = (req, res) => {
//     // model.db_signup(req.body, () => {
//     //     res.json({ result: true });
//     // });
//     const { userid, name, pw } = req.body;
//     //create 데이터 생성
//     //실습과제 - 비밀번호 암호화하여 저장
//     User.create({ userid, name, pw }).then(() => {
//         res.json({ result: true });
//     });
// };
const post_signup = async (req, res) => {
        const { userid, name, pw } = req.body;
        const hashpw = bcyptPassword(pw);
        const result = await User.create({ userid, name, pw:hashpw })
        if(result) {
            res.json({ result: true });
        };
    }
    
//로그인
// const post_signin = (req, res) => {
//     model.db_signin(req.body, (result) => {
//         if (result.length > 0) {
//             res.json({ result: true, data: result[0] });
//         } else {
//             res.json({ result: false });
//         }
//     });
//     //실습과제 - 로그인
//     //step1 아이디를 찾아서 사용자 존재 유/무 체크
//     //step2 입력된 비밀번호 암호화하여 기존 데이터와 비교
// };
const post_signin = async (req, res) => {
    const {userid, pw} = req.body;
    const result = await User.findOne({
        where:{userid}
    });
    if(!result) {
        res.json({result: false, message:"사용자가 존재하지 않습니다."});
    }
    const compare = comparePassword(pw, result.pw);
    if(compare) {
        req.session.userInfo = {name: result.name, id: result.id}
        res.cookie("login", true)
        res.json({result:true, data:result});
    } else {
        res.json({result:false, message:"비밀번호가 틀렸습니다."});
    };
};

//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    //update ( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력 )
    const { name, pw, id } = req.body;
    User.update({ name, pw }, { where: { id } }).then(() => {
        res.json({ result: true });
    });
};

//DELETE
//회원탈퇴 destroy()
const deleteUser = (req, res) => {
    User.destroy({
        where: {id: req.body.id}
    }).then(() => {
        //쿠키삭제
        res.clearCookie("login")
        //세션삭제
        req.session.destroy()
        res.json({result:true})
    })
}

const bcyptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
}



module.exports = {
    main,
    signup,
    signin,
    profile,
    post_signup,
    post_signin,
    edit_profile,
    deleteUser,
    members,
};
