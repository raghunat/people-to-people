/******************************************************************************
playScore.js
Author: mcdo7187@fredonia.edu
Date: 4/6/2015
Version: 0.0.5
*******************************************************************************/
var mongoose = require('mongoose');
var cards = require('card');
var user = require('user');

// Schema for player score -- How do we relate this to the user though? ask Raga

var playerScoreSchema = mongoose.Schema({
	playerScore: {
		gameScore = [cards],		// Array of Cards user has won in current game
		overallScore: Number,		// Overall Score user has gained
		userId: user.Types.ObjectId	// UserId, email address can also be used as reference
	}
});

// Makes the model for the schema useful
module.exports = mongoose.model('PlayerScore', playerScoreSchema);
// Updating User's gameScore and overallScore based off user's email which is unique.
db.score.update(
{ email: "abc123@gmail.com" },
{ $inc: { score: 1, overallScore: 1 } }
)
