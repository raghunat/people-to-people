var cardLayer = require('./GetTenRandomCards.js');

function Card(name, pic, pickedLast) {
this.name = name;
this.pic = pic;
this.pickedLast = pickedLast;
}

var cardList = [
new Card("Tugce", 0, true),
new Card("Scott", 0, false),
new Card("Mo", 3, false),
new Card("Amy", 0, false),
new Card("Katie", 4, false),
new Card("Colin", 0, false),
new Card("Tim", 1, false),
new Card("Kyle", 1, false),
new Card("Ibi", 0, false),
new Card("Adam", 2, true),
new Card("Stephen", 0, false),
new Card("Sam", 3, false),
new Card("Jake", 0, false),
new Card("Jer", 4, false),
new Card("Lindsey", 0, false),
new Card("Fester", 1, false),
new Card("Danika", 1, false),
new Card("Beyonce", 0, false),
new Card("Tengo", 2, true),
new Card("Percy", 0, false),
new Card("Jack", 3, false),
new Card("Jill", 0, false),
new Card("Brian", 4, false),
new Card("Mary", 0, false),
new Card("Jennifer", 1, false),
new Card("Bolton", 1, false),
new Card("Jerry", 0, false),
new Card("Philip", 2, true),
];

var should = require('should');

describe('cardLayer', function () {
  it('should return 10 random cards', function (done) {
  cardLayer.GetRandomCards(cardList).length.should.equal(10);
  done();
  });
});
