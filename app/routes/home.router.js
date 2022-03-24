// const express = require('express');
// const res = require('express/lib/response');
// const router = express.Router();

// var homeController = require('../controllers/home.comtroller');

// router.get('/', homeController.home);

// router.get('/about', homeController.about);

// module.exports = router;

module.exports = function(router){

var homeController = require('../controllers/home.comtroller');

router.get('/', homeController.home);

router.get('/about', homeController.about);
}