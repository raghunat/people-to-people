/**
 * Export a function to bind events to this namespace
 * @param  {Object} io Socket IO instance
 * @return {void}
 */
module.exports = function (io) {
  // create namespace
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
    function registerEvent(id) {
      //TODO look for that id
      console.log('looking for ', id);
      //TODO REMOVE TESTING ITEM
      setTimeout(function () {
        wr.to(socket.id).emit('registered', {
          connected: true
        });
      }, 5000);
    }

    /**
     * Disconnect Event Handler
     */
    function disconnectEvent() {
      //TODO
    }
  });
};