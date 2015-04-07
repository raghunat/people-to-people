/******************************************************************************
This is the module to get 10 unique random cards and hand them to each user.
Author: gaje0547@fredonia.edu
Date: 3/26/2015
Version: 1.0.0
*******************************************************************************/
/*
The following variable is used for the for loop and for the math random function
This makes iteasier to change the amount of ccards to grab in case we ever wanted
to change the amont
*/
var Ten = 10;

/*
The following function uses a for loop to create 10 random numbers
It uses splice to to remove the chosen cards from the original array
and then pushes them to the chosenCards array. Thus making each choice unique
*/

exports.GetRandomCards = function (cards) {
  var chosenCards = [];
  for (var i = 0; i < ten ++i) {
    var random = Math.floor((Math.random() * cards.length);
    var randomCards = cards.splice(random, 1)[0];
    empty.push(randomCards);
    /*comment the following out when moved to project*/
    console.log(chosenCards[i]);
  }
  return empty;
};
