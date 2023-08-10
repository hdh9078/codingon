//const Visitor = require("../model/Visitior");
const models = require("../models");

exports.main = (req, res) => {
    res.render("index");
};

//전체목록보기
exports.getVisitors = (req, res) => {
    //res.render("visitor", {data:Visitor.getVisitors()});
    // Visitor.getVisitors((rows) => {
    //     res.render("visitor", {data: result});
    // });

    //select * from visitor 한 것 과 같다
    models.Visitor.findAll().then((result) => {
        // console.log("find", result)//console에 data 확인용
        res.render("visitor", {data: result});
        // res.send({ data : result }) //postman으로 data 확인용
    })
};

//방명록 하나 조회
exports.getVisitor = (req, res) => {
    // Visitor.getVisitor(req.query.id, (result) => {
    //     res.render("visitor", {data: result});
    // });
    models.Visitor.findOne({
        where: {id : req.query.id},
    }).then(result => {
        res.render("visitor", {data: [result]});
    })
};

//방명록 하나 추가
exports.postVisitor = (req, res) => {
    // Visitor.postVisitor(req.body, (result) => {
    //     res.send({id:result.insertId, name:req.body.name, comment:req.body.comment});
    // })
    models.Visitor.create({
        name: req.body.name,
        comment: req.body.comment,
    }).then(result => {
        res.send({id:result.dataValues.id, name:req.body.name, comment:req.body.comment});
    })
}

//방명록 하나 수정
exports.patchVisitor = (req, res) => {
    // Visitor.patchVisitor(req.body, () => {
    //     res.send({result: true});
    // })
    models.Visitor.update(
        {
            name: req.body.name,
            comment: req.body.comment,
        },
        {where: {id: req.body.id}}
    ).then( () => {
        res.send({result: true});
    })
};

//방명록 삭제
exports.deleteVisitor = (req, res) => {
    // Visitor.deleteVisitor(req.body, () => {
    //     res.send({result: true});
    // });
    models.Visitor.destroy({
        where: {id: req.body.id}
    }).then(() => {
        res.send({result: true});
    })
};