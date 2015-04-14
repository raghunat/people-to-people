/******************************************************************************
playScore.js
Author: mcdo7187@fredonia.edu
Date: 4/6/2015
Version: 0.0.5
*******************************************************************************/

var mongoose = require('mongoose');

/// Schema for player score -- How do we relate this to the user though? ask Raga.
var playerScoreSchema = mongoose.Schema({
    playerScore: {
		gameScore: int,
		overallScore: int
    }
});

// Makes the model for the schema useful
module.exports = mongoose.model('PlayerScore', playerScoreSchema);

// Updating User's gameScore and overallScore based off user's email which is unique.
db.score.update(
   { email: "abc123@gmail.com" },
   { $inc: { score: 1, overallScore: 1 } }
)
