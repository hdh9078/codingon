const db = require("../models")

const get_todo = async (req, res) => {
    const data = await db.User.findAll()
    res.json({ data });
};
const post_todo = async (req, res) => {
    const { title } = req.body;
    const data = await db.User.create({title, done:false})
    res.json({ data });
};
const patch_todo = (req, res) => {
    const {id, title} = req.body;
    db.User.update({title}, {where:{id}}).then(() => {
        res.json({result:true});
    });
};

const delete_todo = (req, res) => {
    console.log(req.body)
    db.User.destroy({
        where:{id: req.body.id}
    }).then(() => {
        res.json({result:true})
    })
};

module.exports = { get_todo, post_todo, patch_todo, delete_todo };
