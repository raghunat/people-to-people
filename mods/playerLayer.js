var playerLayer = {
	makeGroups: function(players){

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
		/*
		console.log(groupedplayers[0]);
		console.log(groupedplayers[1]);
		console.log(groupedplayers[2]);
		*/
		//Returns an array of 3 objects. Each object is an array of up to 10 player objects, the first of which will be the king.
		//Each player object has had a role added, and set to their role in the next game. Each player has had their pickedLast
		//updated to reflect whether they were just picked as a king.
		return groupedplayers;
	}
}

module.exports = playerLayer;