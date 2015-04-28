var gameLayer = {

//var Card = require('./database/models/card.js');




	prepareGames: function(waitingRoom){
		console.log("starting to prepare game");
		console.log(waitingRoom.sockets);
		var playerLayer = require('./playerLayer.js');
		var gamesArray = [];
		//Create geolocation groups using the location data for all players in waiting room
		//var regions = geoLocationFunction(watingRoom)
		var regions = [];
		regions[0] = waitingRoom.sockets; //Make it work till we do geolocation
		console.log(regions);
		//Call make groups for each geolaction group
		for(var i = 0; i < regions.length; i++){
			console.log("Creating group for region: " + i);
			console.log(regions[i]);
			var tempArray = playerLayer.makeGroups(regions[i]) //Temp array will be an array of 10 player games
			console.log(tempArray);
			for (var j = 0; j < tempArray.length; j++){
				gamesArray.push(tempArray[j]);//We are looping through each array of 10 player games, and adding the individual games to the gamesArray
			}
		}
		

		//Get a set of cards
		gameLayer.getNewCardsArray(gamesArray)

		console.log(gamesArray);
	},
	
	getNewCardsArray: function(gamesArray){
		/*Card.find({}, function(err, cards){
			
		}); */
		var cardArray = [];
		for(var i=0; i<100; i++){
			cardArray.push(i);
		}
		gameLayer.newCardsArrayCallback(gamesArray, cardArray);

	},

	newCardsArrayCallback: function(gamesArray, cardArray){
		//Call assignCards for each geolocation group
		var playerLayer = require('./playerLayer.js');
		playerLayer.assignCards(gamesArray, cardArray);

		//Pass gamesArray to game starting function;
		//startGames(gamesArray);
	}
	/*
	function startGames(gamesArray){
		console.log(Game Started);
			//io.emit: role of player
			//io.emit: cards if pawn
			//io.on: Card picked : remove all other cards from player object, add player object to a submitted object
			//Wait for all player to pick or timeout has to occur
			//io.emit: submitted object
			//io.on: selection from king : Add a winner property to winner, increase score by 1
			//io.emit: submitted object with winner set
			//Function to report results to database
			//Once players are done viewing results, they can send themselves back to waiting room by emmiting 'enter waiting room'	
	}; */
}

module.exports = gameLayer;