var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var User = require('../models/users');
var jwt = require('jwt-simple');
var bcrypt = require('bcryptjs');

router.route('/authenticate')
    .get(jsonParser,function (req,res) {
        res.send('helo world')

    })
    .post(jsonParser,function (req,res) {
        var logUser = req.body;
        var createUser = new User();
        User.findOne({Username:logUser.username},function (err,user) {
            if (err) throw err;
            console.log(user)
            if(!user)
            {
                res.json({success: false, user:false, message: 'Authentication Failed - User not Found'})
            }
            else if (user) {

                if(!createUser.compareHash(logUser.password,user.Password)){
                    res.json({success: false, user:true, pass:false, message: 'Authentication Failed - Wrong Password'})
                }
                else{
                    console.log('it works');
                    var myToken = jwt.encode(logUser,"cool")
                    res.json({
                        success: true,
                        user:true,
                        pass:true,
                        message: 'Enjoy your token!',
                        token: myToken
                        //clean:jwt.decode(myToken,"hello")
                    });
                }
                // res.json({success: true, message: 'Authentication Passed'})
            }

        })
    })
router.route('/')
    .get(jsonParser, function (req, res) {
        mongoose.model('User').find({}, function (err, collection) {
            if (err) throw err;
            res.json(collection);
            //console.log(collection)
        })
    })
    .post(jsonParser, function (req, res) {
        var newUser = new User();
        var user = req.body;
        newUser.Username = user.username;
        newUser.Password =  newUser.generateHash(user.password);
/*        {
            Username: req.body.username,
                Password: generateHash(req.body.password)
        }*/
       //const saltRounds = 10;
        //const myPlaintextPassword = user.Password;
       // const someOtherPlaintextPassword = 'not_bacon';

     // var someFunc =  function (password) {
         // return bcrypt.hash(password, saltRounds, function(err, hash) {
         //     user.Password = hash;
       //  });
        //};
      // console.log(someFunc(user.Password));

        //console.log("new User is => " + user);
        newUser.save(function (err) {
            if (err) throw err;
               // res.json({success: true, message: 'User Created'})
            res.json({
              user:newUser.createJson()
              //clean:jwt.decode(myToken,"hello")
        });
           // console.log('user saved')
           // console.log(jwt.decode(newUser.token,"hello"))
        });
        //res.send('Thank you!');
       // console.log(req.body.username);
        //console.log(req.body.model);
/*        User.find({}, function (err, users) {
            if (err) throw err;
            res.json(users);
            //console.log(users)
        })*/
    });
module.exports = router;