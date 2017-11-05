var mongoose = require("mongoose");
var _ = require("underscore");

module.exports = function(wagner){
	
	mongoose.connect(process.env["MONGO_ACTIVITY_TRACKER_URL"], { "useMongoClient": true });
	wagner.factory("db", function(){	
		return mongoose;
	});

	var ActivityLog = mongoose.model("ActivityLog", require("./activity_log"), "ActivityLogs");
	var models = {
		"ActivityLog": ActivityLog
	}
	_.each(models, function(value, key){
		wagner.factory(key, function(){
			return value;
		});
	});
	return models;
}