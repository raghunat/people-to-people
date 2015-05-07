var express = require('express');
var router = express.Router();
var Card = require('../mods/database/models/card');
var Category = require('../mods/database/models/category');
var fs = require('fs');

//var Geo = require('./geolocation');

//var Waiting = require('./waitingRoom');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'People-to-People'
  });
});

/* GET home page. */

router.get('/developer', function (req, res, next) {
  res.render('developer', {
    title: 'Developer'
  });
});

router.get('/howToPlay', function (req, res, next) {
  res.render('HowToPlay', {
    title: 'How to play'
  });
});


router.get('/appLogin', function (req, res, next) {
  res.render('appLogin', {
    title: 'appLogin'
  });
});

router.get('/appRegister', function (req, res, next) {
  res.render('appRegister', {
    title: 'appRegister'
  });
});

router.get('/title', function (req, res, next) {
  res.render('title', {
    title: 'title'
  });
});

/* GET board game. */
router.get('/game', function (req, res, next) {
  res.render('BoardExample', {
    title: 'Board Game'
  });
});



/* GET game result. */
router.get('/result', function (req, res, next) {
  res.render('gameResult', {
    title: 'Game Result'
  });
});


// Card generation routes
router.get('/card', function (req, res) {
  res.render('card');
});

router.post('/card', function (req, res) {
  console.log(req.files);
  fs.readFile(req.files.cardPicture.path, function (err, data) {
    var card = new Card();
    card.cardPicture = new Buffer(data, 'binary').toString('base64');
    card.cardLabel = req.body.cardLabel;
    card.cardWins = 0;
    card.timesPlayed = 0;
    card.save(function (err) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json("success!");
      }
    });
  });
});

// Card generation routes
router.get('/category', function (req, res) {
  res.render('category');
});

router.post('/category', function (req, res) {

  var cat = new Category();
  cat.text = req.body.text;
  cat.timesUsed = 0;
  cat.save(function (err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json("success!");
    }
  });
});
module.exports = router;
