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
        gameCreatedAt: { type: Date };
        gameLocation: /*however the location is saved in the module*/;
        gamePlayers: String ;

    }
});

// Makes the model for the schema useful
module.exports = mongoose.model('game', gameSchema);
