/**
 * Export a function to bind events to this namespace
 * @param  {Object} io Socket IO instance
 * @return {void}
 */
module.exports = function (io) {
  // create namespace
  var gameLayer = require('../gameLayer.js'); 
  var wr = io.of('/waiting-room');

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
      //TODO look for that id


      socket._playerId = id;
      socket._location = location;

      //Stuff from the DB team
      //socket._playerName = 
      //socket._playerScore = 
      //socket._lastRole =
      timer();
      console.log("Player Registered");
      console.log("Room Size: " + wr.sockets.length);
      //console.log(wr);



      console.log('looking for ', id);
      //TODO REMOVE TESTING ITEM
      setTimeout(function () {
        wr.to(socket.id).emit('registered', {
          connected: true
        });


      }, 15000);
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
          gameLayer.prepareGames(wr);
        } else {
          console.log("There are not enough players to start a game, reseting countdown");
        }
        timer();
      }, 1000 * 5);
    }
  });
};