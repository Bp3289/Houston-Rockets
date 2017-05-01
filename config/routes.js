var express = require('express');
var router = express.Router();

// var bodyParser = require('body-parser');

var rocketController = require('../controllers/rocket');

router.route('/players')
.get(rocketController.getAllRockets);

router.route('/players/:id')
.get(rocketController.getOneRocket);


module.exports = router;

