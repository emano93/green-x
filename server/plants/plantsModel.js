var mongoose = require('mongoose');

var PlantSchema = new mongoose.Schema({
 name: String,
 plantType: String,
 sunExposure: String,
 bloomTime: String,
 watering:String
});

module.exports = mongoose.model('Plant', PlantSchema);
