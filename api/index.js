var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cars = require('./routes/cars');
var users = require('./routes/users');
var photos = require('./routes/photos');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/cars', cars);
app.use('/users', users);
app.use('/photos',photos);
/*
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.file)
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})*/
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/motors'); // local machine
mongoose.connection.on("open", function (ref) {
    console.log("Connected to mongo server.");
    //return start_up();
});
mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});

/*bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});*/


var port = process.env.PORT || 9000;
/*var urlencodedParser = bodyParser.urlencoded({extended: false});
 var jsonParser = bodyParser.json();*/
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index')
});
app.listen(port, function () {
    console.log('App is listening on port 9000..');
});