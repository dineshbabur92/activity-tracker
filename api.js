var bodyparser = require("body-parser");
var httpstatus = require("http-status");
var express = require("express");
var underscore = require("underscore");

module.exports = function(wagner){

	api = express.Router();

	api.get("/", function(req, res){
		res.sendFile("/client/index.html");
		// res.json({message: "hello world!"});
	});

	api.post("/i_did_this", wagner.invoke(function(ActivityLog){
		return function(req, res){
			if(req.body.passcode !== 666526){
				res.json({err: "You are not authenticated!!", post_status: -1});
				// console.log(test_error_catch);
				return;
			}
			ActivityLog.create(req.body, function(err, result){
				if(err)
					res.json({err: err, post_status: -1});
				else
					res.json({post_status: 1});

			});
	}}));

	return api;
}