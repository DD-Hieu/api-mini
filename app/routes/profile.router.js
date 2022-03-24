// const express = require('express');
// const res = require('express/lib/response');
// const router = express.Router();

// var profileController = require('../controllers/profile.comtroller');

// router.get('/profiles', profileController.list);

// router.get('/profiles/detail/:id', profileController.detail);

// module.exports = router;

module.exports = function(app){
    
var profileController = require('../controllers/profile.comtroller');

router.get('/profiles', profileController.list);

router.get('/profiles/detail/:id', profileController.detail);
}