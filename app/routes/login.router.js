
module.exports = function(router){

    var accountController = require('../controllers/account.controller');

    router.post('/account/login', accountController.login);

    router.post('/account/add', accountController.add_account);
    
    }