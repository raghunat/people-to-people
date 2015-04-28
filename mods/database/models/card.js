var mongoose = require('mongoose');

//Creating a schema for cards
var cardSchema = mongoose.Schema({
    Card: {
		      cardPicture: String,
		      cardLabel: Number,
			  cardWins: Number, //Number of times card wins
			  timesPlayed: Number //Total number of times played
    }
});

// Makes the model for the schema useful
module.exports = mongoose.model('Card', cardSchema);

/*** Methods ***/

// Count number of times card is chosen
cardSchema.methods.chosen = function (cb) {
	$inc: {chooseCount: 1}
}

// Counts number of times card has won
cardSchema.methods.won = function (cb) {
	$inc: {winCount: 1}
}

// Query cards, send them to module
Card.find({}, function(err, cards){
 	
});