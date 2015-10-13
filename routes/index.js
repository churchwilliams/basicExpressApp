var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: "Eric's Express",
  	eric: 'I am a bad A developer!'
   });
});

module.exports = router;
