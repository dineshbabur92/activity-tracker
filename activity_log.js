var mongoose = require("mongoose")

var ActivityLogSchema = {
	"activity_name": {
		type: String,
		required: true,
		enum: [
			"Pranayaamam",
			"Routine Exercise",
			"Running",
			"Skipping",
			"Jumping",
			"Gymming",
			"Study - Data Science",
			"Study - Development",
			"Absolute Studying",
			"Absolute Practice",
			"Study - Artful"
		]
	},
	"sub_activity_name":{
		type: String
	},
	"unit": {
		type: String,
		required: true
	},
	"quantity":{
		type: Number,
		required: true
	},
	"date":{
		type: Date,
		required: true
	},
	"nth_time":{
		type: Number,
		default: 1
	},
	"around_start_hour":{
		type: Number
	}
}

module.exports = new mongoose.Schema(ActivityLogSchema);
module.exports.set("toObject", {"virtuals": true});
module.exports.set("toJSON", {"virtuals": true});

module.exports.ActivityLogSchema = ActivityLogSchema;