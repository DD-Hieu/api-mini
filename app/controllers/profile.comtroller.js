var Profile = require('../models/profile.model');
exports.list = function(req, res){
    Profile.get_all(function(data){
        
    res.send({result: data});
    });
}

exports.detail = function(req, res){
    var data = Profile.getById(req.params.id);

    req.send({result: data});
}

exports.add_profile = function(req, res){
    var data = req.body;
    Profile.create(data, function(respnse){
        res.send({result: respnse});
    });
}

exports.remove_profile = function (req, res){
    var id = req.params.id;
    Profile.remove(id, function (respnse){
        res.send({result: respnse});
    })
}

exports.update_profile = function(req, res){
    var data = req.body;
    Profile.update(data, function(respnse){
        res.send({result: respnse});
    });
}