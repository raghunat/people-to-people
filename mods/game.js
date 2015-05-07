module.exports = function (guid, gameArray, io) {
  var gameRoom = io.of('/game-' + guid);

  var getPlayerByEmail = function (email) {
    for (var i = 0; i < gameArray.length; i++) {
      if (gameArray[i]._email === email) {
        return gameArray[i];
      }
    }
    return null;
  };
  //keep count
  var gameSockets = [];

  gameRoom.on('connect', function (socket) {
    gameSockets.push(socket);
    // listen for when the client is ready
    socket.on('ready', function (socketId, email) {
      var player = getPlayerByEmail(email);
      console.log(player.cards);
      gameRoom.to(socketId).emit('play', player.cards, 'pawn');
    });
  });
  //push people to the new namespace
  for (var i = 0; i < gameArray.length; i++) {
    io.of('/waiting-room').to(gameArray[i].id).emit('gameStart', guid);
  }
};
