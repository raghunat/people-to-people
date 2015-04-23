/*
Game

>> gameID
>> time
>> location
>> userIDs

*/

var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
    gameSession: {
        createdAt:  Date  ;
        location:   Array ;
        players:    Array ;

    }
});

// Makes the model for the schema useful
module.exports = mongoose.model('game', gameSchema);

//game players, game location, error
gameSession.save(function(gameSession, err ){
  if (err) return console.error(err);
  gameSession.save();

});
