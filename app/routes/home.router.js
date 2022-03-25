// const express = require('express');
// const res = require('express/lib/response');
// const router = express.Router();

// var homeController = require('../controllers/home.comtroller');

// router.get('/', homeController.home);

// router.get('/about', homeController.about);

// module.exports = router;

module.exports = function(router){

var homeController = require('../controllers/home.comtroller');

var JWT = require('../common/_JWT')

router.get('/', homeController.home);

router.get('/about', homeController.about);

router.get('/token', async function(req, res){
    var  user = {
        name:"admin",
        email:"admin@gmail.com",
    }
    const _token = await JWT.make(user);
    res.send({token: _token});
 });
 router.get('/check_token', async function(req, res){
    var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0sImlhdCI6MTY0ODE3OTY5NywiZXhwIjoxNjQ4MTgzMjk3fQ.cny9s5YCy8QLFjEfp0Soh0F_yZLa4Htou19u-jv4nnM"
    const data = await JWT.check(_token);
    res.send({data: data});
 });
};
