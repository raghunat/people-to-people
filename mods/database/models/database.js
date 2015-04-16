//Database.js

// Grabbing Mongoose for our project
var mongoose = require('mongoose')

//Note username and password not included.
var uri = "mongodb://username.password.ds061158.mongolab.com:61158/gamething";

// Connecting to our hosted datatbase. Giving us an error message if we are unable to connect.
mongoose.connect(uri, function(err, db){
	if(err){
		console.log("Error: Unable to connect to database.")
		return;
	}
});

