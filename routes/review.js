var express = require('express')
var router = express.Router()

let review = require('../controllers/review');
// GET da página inicial
router.get('/review',review.review);

module.exports = router;

