var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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