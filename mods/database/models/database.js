/******************************************************************************
DataBase workings
Author: mcdo7187@fredonia.edu
Date: 4/6/2015
Version: 0.0.5
*******************************************************************************/


/* Notes for Personal Use

$set - sets a value
$unset - unset a value
$inc - increment an integer
$push - append a value to an array
$pushAll- append several values to an array
$pull - remove a value from an arry
$pullAll - remove several values from an array
$bit - bitwise operators
$addToSet - adds a a value to a set if it doesn't exist. 
$rename - renames a field

*/


// Grabbing Mongoose for our project
var mongoose = require('mongoose')

//Note username and password not included.
var uri = "mongodb://ds061158.mongolab.com:61158/gamething";

// Connecting to our hosted datatbase. Giving us an error message if we are unable to connect.
mongoose.connect(uri, function(err, db){
	if(err){
		console.log("Error: Unable to connect to database.")
		return;
	}
});

// Inserting information to the users colleciton
db.users.insert(userSchema);

// Inserting information to the cards collection
db.cards.insert(cardSchema);







