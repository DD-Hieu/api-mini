const db = require('../common/connect');
const Profile = function(profile){
    this.ID = profile.ID;
    this.Name = profile.Name;
    this.Sexual = profile.Sexual;
    this.Age = profile.Age;
    this.Phone = profile.Phone;
}

Profile.get_all = function(result){
    db.query("SELECT * FROM Profile", function(err, profile){
        if(err){
            result(null);
        }
        else {
            result(profile);
        }
    });
}

Profile.getById = function(id, result){
    db.query("SELECT * FROM Profile WHERE ID = ?", id, function(err, profile){
        if(err || profile.length == 0){
            result(null);
        }
        else {
            result(profile[0]);
        }
    });
}

Profile.create = function(data, result){
    db.query("INSERT into Profile SET ?", data, function(err, profile){
        if(err){
            result(null);
        }
        else {
            result({id: profile.insertId, ...data});
        }
    })
}

Profile.remove = function(id, result){
    db.query("DELETE FROM Profile WHERE ID = ?", id, function(err, profile){
        if(err){
            result(null);
        }
        else {
            result("Success in delete profile ID " + id);
        }
    });
}

Profile.update = function(data, result){
    db.query("UPDATE Profile SET Name=?, Sexual=?, Age=?, Phone=? WHERE ID=?", [data.Name, data.Sexual, data.Age, data.Phone, data.ID], function(err, profile){
        if(err){
            result(null);
        }
        else {
            result(data);
        }
    })
}

module.exports = Profile;