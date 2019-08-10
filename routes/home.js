var express = require('express')
var router = express.Router()

let home = require('../controllers/home');
// GET da página inicial
router.get('/',home.get_landingpage);
router.post('/review',home.post_url)

module.exports = router;

