var express = require('express');
var router = express.Router();

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

/* For About us page
router.get('/aboutUs', function(req, res, next) {
  res.render('aboutUs', { title: 'About us' });
});
*/

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

/* GET waiting room. */
router.get('/waiting', function (req, res, next) {
  res.render('waitingRoom', {
    title: 'Waiting Room'
  });
});

module.exports = router;