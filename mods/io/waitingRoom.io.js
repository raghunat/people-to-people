var async = require('async');
var User = require('../database/models/user');

/**
 * Export a function to bind events to this namespace
 * @param  {Object} io Socket IO instance
 * @return {void}
 */
module.exports = function (io) {
  // create namespace
  var gameLayer = require('../gameLayer.js');
  var wr = io.of('/waiting-room');
  var timerRunning = false;

  wr.on('connection', function (socket) {

    /////////////////////////
    // Event Registrations //
    /////////////////////////

    /**
     * Register event listener
     */
    socket.on('register', registerEvent);

    /**
     * When a player leaves event handler
     */
    socket.on('disconnect', disconnectEvent);



    ////////////////////
    // Event Handlers //
    ////////////////////

    /**
     * Register Event Handler that registers a player for the next game
     * @param {String} id Object ID of the player
     */
    function registerEvent(id, location) {
      //look for that id
      socket._playerId = id;
      socket._location = location;
      User
        .findOne({})
        .exec(function (err, user) {
          if (err) {
            return console.log('ERROR:', err);
          }
          if (!user) {
            return console.log('ERROR could not find the user with id: ', id);
          }
          console.log(user);
          //Stuff from the DB team
          socket._playerName = user.firstName + ' ' + user.lastName;
          //socket._playerScore =
          socket._lastRole = 'Pawn'; //setting last role, as we don't have the DB access setup to pull this yet, and gamelayer needs it
          //Start the timer when a player connects if its not already started.
          if(timerRunning == false){
            timerRunning = true;
            timer();
          }
          console.log("Player Registered");
          console.log("Room Size: " + wr.sockets.length);
          //TODO REMOVE TESTING ITEM
          wr.to(socket.id).emit('registered', {
            connected: true
          });
        });
    }

    //Wait until time to start, then:
    /*
     */
    //Disconnect Event Handler
    function disconnectEvent() {
      console.log("Player Disconnected");
      console.log("Room Size: " + wr.sockets.length);
      //No need to do anything, as the disconnect even already removes the socket from the room, and we are basing the game on the sockets.
    }

    var timer = function(){
      console.log("Start Timer");
      setTimeout(function() {
        console.log("Checking to see if there are enough players to start game");
        if(wr.sockets.length > 1){
          gameLayer.prepareGames(wr);//Currently plassing the entire waiting room to the game layer
        } else if(wr.sockets.length == 0) {
          timerRunning = false; //Stop the timer if there are no players at all.
        } else {
          console.log("There are not enough players to start a game, reseting countdown");
          timer(); //Reset timer if there are too few players to start a game
        }
      }, 1000 * 5);
    }
  });
};
