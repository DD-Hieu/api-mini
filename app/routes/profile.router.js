// const express = require('express');
// const res = require('express/lib/response');
// const router = express.Router();

// var profileController = require('../controllers/profile.comtroller');

// router.get('/profiles', profileController.list);

// router.get('/profiles/detail/:id', profileController.detail);

// module.exports = router;

module.exports = function(router){
    
var profileController = require('../controllers/profile.comtroller');

router.get('/profile', profileController.list);

router.get('/profile/detail/:id', profileController.detail);

router.post('/profile/add', profileController.add_profile);

router.delete('/profile/delete/:id', profileController.remove_profile);

router.put ('/profile/update', profileController.update_profile);

}