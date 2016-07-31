var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'photos/'});
router.route('/')
    .post(upload.single('photo'), function (req, res, next) {
    console.log(req.file.filename)
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    })
module.exports = router;