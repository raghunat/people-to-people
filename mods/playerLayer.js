var playerLayer = {
	//Make groups receives the array of all players that need to participate and the array of all cards
	//First it creates a group of groups, representing each game that will be played
	//Then it assigns players to those games, picking 1 king per game, and making the rest pawns
	//pickedLast is updated, and a role property explicitly listing the player's role is added
	makeGroups: function(players, cards){

		//Specify the max size of each group
		var targetgroupsize = 10;
		
		//Determine the number of groups to generate, divide by target size,
		//round up to make room for remainder
		var groups = Math.ceil(players.length / targetgroupsize);
		
		//Initialize array to push new group arrays to
		var groupedplayers = [];

		//Populate the array of groups with empty groups to fill in later
		for(var i=0; i<groups; i++){
			groupedplayers.push([]);
		}

		//Distribute Kings to each group
		for(var i=0; i<groups; i++){
			//First player in the array will be set as king
			var kingset = 0;
			var count = 0;
			while (kingset === 0){
				//Generate random index
				var randIndex = Math.floor(Math.random() * players.length);
				//Check to see if the king was picked last, try to choose another king if so
				//After a number of tries equal to the number of players, just pick one. Its random, and doesn't necessarily check each, but should try most
				if(players[randIndex].pickedLast == true && count < players.length){
					console.log("Skipping king");
				} else {
					groupedplayers[i].push(players.splice(randIndex, 1)[0]);
					groupedplayers[i][0].pickedLast = "true";
					groupedplayers[i][0].role = "King";
					groupedplayers[i][0].cards = "The King Needs No Cards";
					kingset = 1;
				}
			}
		}

		//Split the players in to their new groups, 
		//keep going as long as anyone is left in players array
		while(players.length > 0){
			//Loop through the new arrays, splicing out one name at a time from
			//and evenly distrubuting them to the new group arrays
			//Loop through once for each group that needs to be populated
			for(var i=0; i<groups; i++){
				//Check to make sure the players array hasn't emptied in this loop
				//which will happen if the players are not evenly divided
				if (players.length>0){
					var randIndex = Math.floor(Math.random() * players.length);
					groupedplayers[i].push(players.splice(randIndex, 1)[0]);
					//Set the non-kings to indicate they did not play king last
					groupedplayers[i][groupedplayers[i].length - 1].pickedLast = "false";
					//Add role of pawn to each pawn
					groupedplayers[i][groupedplayers[i].length - 1].role = "Pawn";					
				}
			}
		}
		//Return game tables
		return groupedplayers;
	},
	//Assign cards function gets cards for each player in the gamesArray, from the card array, and returns the gameArray with the cards added.
	assignCards: function(gamesArray, cardArray){
		var pick = require('./GetTenRandomCards.js');
		//Loop throug the games (each group of players)
		for(var i=0; i<gamesArray.length; i++){
			//Make a copy of the card array, so that players in each game have unique cards with respect to
			//players in that same game, without requiring enough unique cards that they are globally unique between games
			var cardCopy = cardArray.slice(0);
			//loop through one group assinging cards to individual players
			for(var j=1; j < gamesArray[i].length; j++){
				gamesArray[i][j].cards = pick.GetRandomCards(cardCopy);
			}
		}
		return gamesArray;
	}
}

module.exports = playerLayer;