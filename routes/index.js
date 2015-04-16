var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'People-to-People' });
});

/* GET board game. */
router.get('/game', function(req, res, next) {
  res.render('BoardExample', { title: 'Board Game' });
});

/* GET waiting room. */
router.get('/waiting', function(req, res, next) {
  res.render('waitingRoom', { title: 'Waiting Room' });
});

module.exports = router;
