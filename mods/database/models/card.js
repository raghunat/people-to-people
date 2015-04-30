var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Creating a schema for cards
var cardSchema = new Schema({
  cardPicture: String,
  cardLabel: String,
  cardWins: Number, //Number of times card wins
  timesPlayed: Number //Total number of times played

});

// Makes the model for the schema useful
module.exports = mongoose.model('Card', cardSchema);

/*** Methods ***/

// Count number of times card is chosen
// TODO Fix this is wrong
// cardSchema.methods.incChosen = function (cb) {
//   $inc: {
//     chooseCount: 1
//   }
// }

// // Counts number of times card has won
// cardSchema.methods.incWon = function (cb) {
//   $inc: {
//     winCount: 1
//   }
// }
