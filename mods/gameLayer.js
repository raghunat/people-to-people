var playerLayer = require('./playerLayer.js');
var gamesArray = playerLayer.makeGroups(peopleArray);

var waitingRoom = [];
var gamesArray;
var cardsArray;


io.on('enter waiting room', function(playerID, location){
	//Pass player ID and location that the player got from geolocator
	//Code to connect to database, get name of player, get score for player, get lastKing if we want to, add to data object
});


//When the database has returned the player info, add player to the game room player array,
databasecallback.on('Database Returned Player Info' function(playerID, data){
	if(data.valid){
	waitingRoom.push(data);
	//Emit to client to indicate the waiting room has been joined, emit to client time until next round of games
	io.emit(data.playerID, "displayWaitingRoom" );
	} else {
	io.emit(PlayerID, "Error connecting to database");
	}
});



//io.on:If player leaves cleanly prior to game start, remove player from waiting room
io.on('playerdisconnect', function(playerID){
	var delIndex = waitingRoom.FindIndexOf(playerID);
	waitingRoom.splice(delIndex, 1);
});



function prepareGames(waitingRoom){
	//Create geolocation groups using the location data for all players in waiting room
	var regions = geoLocationFunction(watingRoom)
	gamesArray = [];

	//Call make groups for each geolaction group
	for(var i = 0; i < regions.length; i++){
		gamesArray.append(playerLayer.makeGroups(regions[i]));
	}
	
	//Get a set of cards
	getNewCardsArray()
};


newCardsArrayCallback(cardArray){
	//Call assignCards for each geolocation group
	playerLayer.assignCards(gamesArray, cardArray);

	//Pass gamesArray to game starting function;
	startGames(gamesArray);
}

function startGames(gamesArray){
		//io.emit: role of player
		//io.emit: cards if pawn
		//io.on: Card picked : remove all other cards from player object, add player object to a submitted object
		//Wait for all player to pick or timeout has to occur
		//io.emit: submitted object
		//io.on: selection from king : Add a winner property to winner, increase score by 1
		//io.emit: submitted object with winner set
		//Function to report results to database
		//Once players are done viewing results, they can send themselves back to waiting room by emmiting 'enter waiting room'	
};
