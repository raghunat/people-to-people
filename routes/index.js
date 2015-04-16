var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'People-to-People' });
});

<<<<<<< HEAD
/* GET home page. */

router.get('/developer', function(req, res, next) {
  res.render('developer', { title: 'Developer' });
});

router.get('/appLogin', function(req, res, next) {
  res.render('appLogin', { title: 'appLogin' });
});

router.get('/appRegister', function(req, res, next) {
  res.render('appRegister', { title: 'appRegister' });
});

router.get('/title', function(req, res, next) {
  res.render('title', { title: 'title' });
});

module.exports = router;
=======
/* GET board game. */
router.get('/game', function(req, res, next) {
  res.render('BoardExample', { title: 'Board Game' });
});

/* GET waiting room. */
router.get('/waiting', function(req, res, next) {
  res.render('waitingRoom', { title: 'Waiting Room' });
});

module.exports = router;
>>>>>>> 16c8e491dd13c36e6740538949b4d6d6ced877d1
