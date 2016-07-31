var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var User= require('./models/users');
var Car = require('./models/cars');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var mongoose = require('mongoose');

//mongoose.connect('mongodb://kam2016:hello123@127.0.0.1:27017/cars');
mongoose.connect('mongodb://127.0.0.1:27017/cars');

mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    //return start_up();
});

mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});


/*var carSchema = mongoose.Schema({
    Make : String,
    Model : String,
    Year:Number,
    Mileage:Number,
    Price:Number,
    Fuel:String,
    Description:String,
    Image:String

})*/

//var Car  = mongoose.model('Person',carSchema);

var port = process.env.PORT || 8000;
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index')
});

app.get('/users',jsonParser,function (req,res) {
     mongoose.model('User').find({},function (err,collection) {
         if(err) throw err;
         res.json(collection);
         console.log(collection)
     })
});
app.get('/cars',jsonParser,function (req,res) {
    mongoose.model('Car').find({},function (err,collection) {
        if(err) throw err;
        res.json(collection);
        console.log(collection)
    })
});
/*app.get('/cars',function (req,res) {
    Car.find({},function (err,cars) {
        if(err) throw err
        res.json(cars);
    })
});*/
app.post('/car', jsonParser, function (req, res) {
    var car = new Car({
        Make:req.body.make,
        Make : req.body.make,
        Model : req.body.model,
        Year : req.body.year,
        Mileage : req.body.mileage,
        Price : req.body.price,
        Fuel : req.body.fuel,
        Description : req.body.description,
        Image : req.body.image
    });
    car.save(function (err) {
        if(err) throw err

        console.log('person saved')
    });
    //res.send('Thank you!');
    console.log(req.body.make);
    //console.log(req.body.model);
    Car.find({},function (err,cars) {
        if(err) throw err;
        res.json(cars);
        console.log(cars)
    })
});

app.post('/personjson',jsonParser,function (req,res) {
    res.send('Thank you for JSON Data');
    console.log(req.body.make);
    console.log(req.body.model);
});

app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h2>' + req.params.id + '</h2></body></html>')
});
app.get('/person/:id/:details', function (req, res) {
    res.send('<html><head></head><body><h2>' + req.params.id + '</h2><h2>' + req.params.details + '</h2><h2>' + req.query.value + '</h2></body></html>')
});
app.get('/api', function (req, res) {
    res.json({
        firstName: "John",
        lastName: "Doel"
    })
});

//restful API Verbs
app.get('/api/person/:id',jsonParser,function (req,res) {
    //get from database
});
app.post('/api/person',jsonParser,function (req,res) {
    //save to database
});
app.delete('/api/person/:id',jsonParser,function (req,res) {
    //delete to database
});
app.listen(port);