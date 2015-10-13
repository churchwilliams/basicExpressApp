var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
  	title: "This be the ABOUT page, kid",
  	eric: 'I am a bad A developer!'
   });
});

module.exports = router;