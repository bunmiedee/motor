var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var userSchema = mongoose.Schema({
   Username:String,
   Password:String
});
userSchema.methods.generateHash = function (password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(9))
};
userSchema.methods.compareHash = function (password,hash) {
   return bcrypt.compareSync(password, hash)
};

userSchema.methods.createJson = function () {
   var user = this.toObject();
   console.log(user);
   delete user.Password;
   console.log(user);
   return user;
};
User = mongoose.model('User',userSchema);
module.exports = User;
/*
exports.showUsers = function () {
    User.find({},function (err,users) {
        if(err) throw err;
        res.json(users);
        console.log(users)
    })
}*/
