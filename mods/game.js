module.exports = function (guid, gameArray, io) {
  var gameRoom = io.of('/game-' + guid);
  //push people to the new namespace
  for (var i = 0; i < gameArray.length; i++) {
    gameArray[i].emit('startGame', guid);
  }

  var gameSockets = []

  gameRoom.on('connect', function (socket) {
    gameSockets.push(socket);
  });
};
