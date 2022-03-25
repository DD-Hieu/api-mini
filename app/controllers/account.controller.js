var Account = require('../models/account.model');
var JWT = require('../common/_JWT')
exports.list = function(req, res){
    Account.get_all(function(data){       
    res.send({result: data});
    });
}

exports.detail = function(req, res){
    Account.getById(req.params.id, function (respnse){
        res.send({result: respnse});
    });  
}

exports.add_account = function(req, res){
    var data = req.body;
    Account.create(data, function(respnse){
        res.send({result: respnse});
    });
}

exports.remove_account = function (req, res){
    var id = req.params.id;
    Account.remove(id, function (respnse){
        res.send({result: respnse});
    })
}

exports.update_account = function(req, res){
    var data = req.body;
    Account.update(data, function(respnse){
        res.send({result: respnse});
    });
}

exports.login = function(req, res){
    var data = req.body;
    Account.check_login(data, async function(respnse){

        // Give token
        // if(respnse){
        //     const _token = await JWT.make(respnse);
        //     res.send({result: _token});
        // }
        
        res.send({result: respnse});
    });
}