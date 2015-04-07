function Person(name, points, pickedLast) {
this.name = name;
this.points = points;
this.pickedLast = pickedLast;
}

function Card(name, path) {
this.name = name;
this.path = path;
}
//Ganerate array with enough cards to give every player 10 unique ones

var cardArray = []
for(var i=0; i<500; i++){
	cardArray.push(new Card("Card" + i, "Somepathtotheimage"));
}
//Array of players for testing
var peopleArray = [
new Person("Tugce", 0, true),
new Person("Scott", 0, false),
new Person("Mo", 3, false),
new Person("Amy", 0, false),
new Person("Katie", 4, false),
new Person("Colin", 0, false),
new Person("Tim", 1, false),
new Person("Kyle", 1, false),
new Person("Ibi", 0, false),
new Person("Adam", 2, true),
new Person("Stephen", 0, false),
new Person("Sam", 3, false),
new Person("Jake", 0, false),
new Person("Jer", 4, false),
new Person("Lindsey", 0, false),
new Person("Fester", 1, false),
new Person("Danika", 1, false),
new Person("Beyonce", 0, false),
new Person("Tengo", 2, true),
new Person("Percy", 0, false),
new Person("Jack", 3, false),
new Person("Jill", 0, false),
new Person("Brian", 4, false),
new Person("Mary", 0, false),
new Person("Jennifer", 1, false),
new Person("Bolton", 1, false),
new Person("Jerry", 0, false),
new Person("Philip", 2, true),
];

var playerLayer = require('./playerLayer.js');
//var cardAssign = require('./cardAssign.js')

var gamesArray = playerLayer.makeGroups(peopleArray);
gamesArray = playerLayer.assignCards(gamesArray, cardArray);


//Display some results for debugging:

console.log(gamesArray[0][0]);
console.log(gamesArray[0][1]);
console.log(gamesArray[0][9]);
console.log(gamesArray[2][8]);