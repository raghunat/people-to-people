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
        gameCreatedAt:  Date;
        gameLocation: Array;
        gamePlayers: Array ;

    }
});

// Makes the model for the schema useful
module.exports = mongoose.model('game', gameSchema);
