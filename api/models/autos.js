var mongoose = require('mongoose');
var autoSchema = mongoose.Schema({
    Make : String,
    Model : Array
})
Auto = mongoose.model('Auto',autoSchema);
module.exports = Auto;