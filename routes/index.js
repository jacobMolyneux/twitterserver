var express = require('express');
const userController = require('../controllers/userController')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timeline', userController.get_tweets )

router.post('/create_tweet', userController.create_tweet)

router.put('/')
module.exports = router;
