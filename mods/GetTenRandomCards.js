/******************************************************************************
This is the module to get 10 unique random cards and hand them to each user.
Author: gaje0547@fredonia.edu
Date: 3/26/2015
Version: 1.0.0
*******************************************************************************/

/*
The following function uses a for loop to create 10 random numbers
It uses splice to to remove the chosen cards from the original array
and then pushes them to the "empty" array. Thus making each choice unique
exporting the previously empty array ranCard to the
CardList in the GetTenRandomCardstest.js
*/

exports.GetRandomCards = function (cards) {
  var empty = [];
  for (var i = 0; i < 10; ++i) {
    var random = Math.floor((Math.random() * 10) + 1);
    var randomCards = cards.splice(random, 1);
    empty.push(randomCards);
    /*comment the following out when moved to project*/
    console.log(empty[i]);
  }
  return empty;
};
