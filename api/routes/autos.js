var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var Auto = require('../models/autos');

router.route('/')
    .get(jsonParser,function (req,res) {
        mongoose.model('Auto').find({},function (err,collection) {
            if(err) throw err;
            res.json(collection)
            console.log(collection)
        })
    })

module.exports = router;