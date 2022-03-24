var Profile = require('../models/profile.model');
exports.list = function(req, res){
    Profile.get_all(function(data){
        
    res.send({result: data});
    });
}

exports.detail = function(req, res){
    var data = Profile.getById(req.params.id);

    req.send({result: data});
};