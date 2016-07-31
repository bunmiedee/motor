var mongoose = require('mongoose');
var carSchema = mongoose.Schema({
    Make : String,
    Model : Array,
    Year:Number,
    Mileage:Number,
    Price:Number,
    Fuel:String,
    Description:String,
    Image:String

})

Car  = mongoose.model('Car',carSchema);
module.exports = Car;

/*exports.showCars = function () {
    Car.find({},function (err,cars) {
        if(err) throw err;
        res.json(cars);
        console.log(cars)
    })
}*/
