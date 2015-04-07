/******************************************************************************
card.js
Author: mcdo7187@fredonia.edu
Date: 4/6/2015
Version: 0.0.5
*******************************************************************************/

var mongoose = require('mongoose');

//Creating a schema for cards
var cardSchema = mongoose.Schema({
    card: {
		name: String,
		cardNumber: Number
    }
});

// Makes the model for the schema useful
module.exports = mongoose.model('Card', cardSchema);