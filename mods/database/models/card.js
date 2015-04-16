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
		      cardWins: Number,   	//Number of wins with this card used
		      timesPlayed: Number,      //Number of times the card was played in total
	      	      userWinner: // user.Id    //User who won the round
    }
});

// Makes the model for the schema useful
module.exports = mongoose.model('Card', cardSchema);
