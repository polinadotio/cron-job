var db = require('../config');
var mongoose = require('mongoose');

/*************************************************************
Tentative Schema based on GET trends/places
**************************************************************/

var trendSchema = new mongoose.Schema({
  trend_name : {type: String}, //#SandraBland
  tweet_volume : {type: Number}, //22355
  location_name : {type: String}, //San Francisco
  location_type : {type: String}, //Town or Country
  country : {type: String}, //United States
  country_code : {type: String}, //'US'
  woeid : {type: Number}, //2487956
  parent_woeid : {type: Number}, //23424977
  url : {type: String}, //"http://twitter.com/search?q=%23SandraBland"
  created_at : {type: Date}, //timestamp in UTC generated by Twitter API
  updated_at : {type: Date} //generated by MongoDB
});

var Trend = mongoose.model("Trend", trendSchema);

trendSchema.pre("save", function(next, done) {
  //in case I need to do anything here
  next();
});

module.exports = Trend;