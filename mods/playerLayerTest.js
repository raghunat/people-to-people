var playerLayer = require('./playerLayer');
var should = require('should');
function Person(name, points, pickedLast) {
this.name = name;
this.points = points;
this.pickedLast = pickedLast;
}

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

describe('playerLayer', function () {
it('should return 3 groups of people', function (done) {
playerLayer.makeGroups(peopleArray).length.should.equal(3);
done();
});
});

