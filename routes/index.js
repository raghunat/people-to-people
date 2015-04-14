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

module.exports = router;

