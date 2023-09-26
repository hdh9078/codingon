const express = require('express');
const router = express.Router();
// const controller = require('../controller/Cmain');

router.get('/', (req, res) => {
    res.send("hello")
});



module.exports = router;
