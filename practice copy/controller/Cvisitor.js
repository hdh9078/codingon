const models = require("../models");

exports.main = (req, res) => {
    res.render("index");
};

exports.getVisitors = (req, res) => {
    models.Visitor.findAll().then((result) => {
        res.render("visitor", {data:result})
    })
}

exports.getVisitor = (req, res) => {
    models.Visitor.findOne({
        whrer: {id:req.query.id}
    }).then(result => {
        res.render("visitor", {data:[result]})
    })
}

exports.postVisitor = (req, res) => {
    models.Visitor.create({
        name:req.body.name,
        comment:req.body.comment,
    }).then(result => {
        res.send({id:result.dataValues.id, name:req.body.name, comment:req.body.comment})
    })
}

exports.patchVisitor = (req, res) => {
    models.Visitor.update({
        name:req.body.name,
        comment:req.body.comment
    },{
        where: {id:req.body.id}
    }).then(() => {
        res.send({result:true})
    })
}

exports.deleteVisitor = (req, res) => {
    models.Visitor.destroy({
        where: {id:req.body.id}
    }).then(() => {
        res.send({result:true})
    })
}