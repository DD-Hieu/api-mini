
module.exports = function(router){
    
    var accountController = require('../controllers/account.controller');
    
    router.get('/accounts', accountController.list);
    
    router.get('/account/detail/:id', accountController.detail);
    
    router.delete('/account/delete/:id', accountController.remove_account);
    
    router.put('/account/update', accountController.update_account);
    
    }