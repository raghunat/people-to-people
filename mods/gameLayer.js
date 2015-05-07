var uuid = require('node-uuid');
var Game = require('./game');
var Card = require('./database/models/card');
var io;
var gameLayer = {

  //var Cards = require('./database/models/card.js');




  prepareGames: function (waitingRoom, ioInstance, sockets) {
    io = ioInstance;
    console.log("starting to prepare game");
    //console.log(sockets);
    var playerLayer = require('./playerLayer.js');
    var gamesArray = [];
    //Create geolocation groups using the location data for all players in waiting room
    //var regions = geoLocateGroups(watingRoom)
    var regions = [];
    regions.push([]);
    for (var i = 0; i < sockets.length; i++) {
      regions[0].push(sockets[i]); //Make it work till we do geolocation, pushing each socket in the waiting room to region 0
      //TODO we should have a regions array that is returned from the geoLocateGroups funciton
    }
    // console.log(regions);
    //Call make groups for each geolaction group
    for (var a = 0; a < regions.length; a++) {
      console.log("Creating group for region: " + a);
      // console.log(regions[a]);
      var tempArray = playerLayer.makeGroups(regions[a]); //Temp array will be an array of 10 player games
      // console.log(tempArray);
      for (var j = 0; j < tempArray.length; j++) {
        gamesArray.push(tempArray[j]); //We are looping through each array of 10 player games, and adding the individual games to the gamesArray
      }
    }

    //Get a set of cards
    gameLayer.getNewCardsArray(gamesArray)

    //console.log(gamesArray);
  },

  getNewCardsArray: function (gamesArray) {

    //Stand in for card array from find, generating array of 100 cards to randomly assign
    Card.find({}).exec(function (err, cards) {
      if (err) {
        console.log(err);
      } else {
        console.log(cards.length);
        gameLayer.newCardsArrayCallback(gamesArray, cards);
      }
    });

  },

  newCardsArrayCallback: function (gamesArray, cardArray) {
    //Call assignCards for each geolocation group
    var playerLayer = require('./playerLayer.js');
    playerLayer.assignCards(gamesArray, cardArray);

    //Test emit of cards to players


    //Pass gamesArray to game starting function;
    gameLayer.startGames(gamesArray);
  },

  /********************************************
   *
   *	TODO:
   *	Should probably move all the players from waiting room to either a game namespace,
   *	and/or a series of game channels inside the name space. We don't actually need to, but
   *	if we don't, we will end up running everything from waitingroom.io. Also, not exactly sure
   *	how to code socket.on stuff, as the game array isn't a namespace, and the sockets aren't
   *	direct members of it anyway
   *
   *
   *********************************************/




  startGames: function (gamesArray) {
    console.log("Game Started");
    for (var i = 0; i < gamesArray.length; i++) {
      var gameInstance = new Game(uuid.v4(), gamesArray[i], io);
      // for (var j = 0; j < gamesArray[0].length; j++) {
      //   console.log(gamesArray[i][j].cards);

      //   // gamesArray[i][j].emit("role", gamesArray[i][j].role); //Emit role to each player
      //   // gamesArray[i][j].emit("cards", gamesArray[i][j].cards); //Emit each player's cards to that player
      // }
    }
    //io.emit: role of player
    //io.emit: cards if pawn
    //io.on: Card picked : remove all other cards from player object, add player object to a submitted object
    //Wait for all player to pick or timeout has to occur
    //io.emit: submitted object
    //io.on: selection from king : Add a winner property to winner, increase score by 1
    //io.emit: submitted object with winner set
    //Function to report results to database
    //Once players are done viewing results, they can send themselves back to waiting room by emmiting 'enter waiting room'	
  }
};

module.exports = gameLayer;
