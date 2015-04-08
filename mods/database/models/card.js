/******************************************************************************
card.js
Author: mcdo7187@fredonia.edu
Date: 4/6/2015
Version: 0.0.5


Cards (model)

>> picID
>> pic
>> label

*******************************************************************************/

var mongoose = require('mongoose');

//Creating a schema for cards
var cardSchema = mongoose.Schema({
    card: {
		      cardPicture: String,
		      cardLabel: Number,
    }
});

// Makes the model for the schema useful
module.exports = mongoose.model('Card', cardSchema);
