var playerLayer = require('./playerLayer.js');
//var cardAssign = require('./cardAssign.js')

var gamesArray = playerLayer.makeGroups(peopleArray);
gamesArray = playerLayer.assignCards(gamesArray, cardArray);


//Display some results for debugging:

console.log(gamesArray[0][0]);
console.log(gamesArray[0][1]);
console.log(gamesArray[0][9]);
console.log(gamesArray[2][8]);
