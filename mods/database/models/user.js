/******************************************************************************
user.js
Author: mcdo7187@fredonia.edu
Date: 4/6/2015
Version: 0.0.5
*******************************************************************************/
// Model Information
/*
>> userID  
>> firstName
>> lastName 
>> email      *unique field
>> password   *encrypted
>> lastRole   (bool)
>> location
*/

/*Personal Notes

hashSync(data, salt)
data - [REQUIRED] - the data to be encrypted.
salt - [REQUIRED] - the salt to be used in encryption.
*/

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


//Creating a schema for Users
var userSchema = mongoose.Schema({
    user: {
		username: { type: String, required: true, unique: true },
        	email: { type: String, required: true, unique: true },
        	password: { type: String, required: true },
        	userID: { type: String, required: true, unique: true }, // Added a userID is reference users uniquely
		firstName: String,
		lastName: String,
		location: String,
		 lastRole: Boolean
    }
});

// Asynchronous method

// Hashing the password
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

// Checking the passwords
// Load hash from your password DB.
bcrypt.compare(this.user.password), hash, function(err, res) {
    // res == true
});
bcrypt.compare(this.is.not.user.password), hash, function(err, res) {
    // res == false
});



// Synchronous Method

//Hashing a password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
//Checking a passwords
userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.user.password);
};

// I think this will update the user information? 
userSchema.methods.updateUser = function(request, response){

	this.user.name = request.body.name;
	this.user.address = request.body.address;
	this.user.save();
	response.redirect('/user');
};

// Makes the model for the schema useful
module.exports = mongoose.model('User', userSchema);
