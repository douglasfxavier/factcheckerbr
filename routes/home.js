var express = require('express');
var router = express.Router();

let home = require('../controllers/HomeController');
let review = require('../controllers/ReviewController');

// Home routes
router.get('/',home.get_landingpage);
router.post('/review/create',home.create_review);

// Review routes
router.post('/review/sucesso',review.save_review);

module.exports = router;

