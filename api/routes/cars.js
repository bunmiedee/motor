var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var Car = require('../models/cars');

router.route('/')
    .get(jsonParser, function (req, res) {
        mongoose.model('Car').find({}, function (err, collection) {
            if (err) throw err;
            res.json(collection);
            console.log(collection)
        })
    })
    .post(jsonParser, function (req, res) {
        var car = new Car({
            Make: req.body.make,
            Model: req.body.model,
            Year: req.body.year,
            Mileage: req.body.mileage,
            Price: req.body.price,
            Fuel: req.body.fuel,
            Description: req.body.description,
            Image: req.body.image
        });
        car.save(function (err) {
            if (err) throw err
            console.log('person saved')
        });
        //res.send('Thank you!');
        console.log(req.body.make);
        //console.log(req.body.model);
        Car.find({}, function (err, cars) {
            if (err) throw err;
            res.json(cars);
            console.log(cars)
        })
    });
router.route('/:make/:model')
    .get(jsonParser,function (req,res) {
        console.log(req.params.make)
        mongoose.model('Car').find({"Make":req.params.make,"Model":req.params.model},function (err,collection) {
            if(err) throw err;
            res.json(collection);
            console.log(collection);
        })
    })
module.exports = router;