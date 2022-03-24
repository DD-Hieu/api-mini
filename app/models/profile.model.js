const db = require('../common/connect');
const Profile = function(profile){
    this.ID = profile.ID;
    this.Name = profile.Name;
    this.Sexual = profile.Sexual;
    this.Age = profile.Age;
    history.Phone = profile.Phone;
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

Profile.getById = function(id){
    var data = {"id": id, "name":"Profile name 1"};
    return data;
}

Profile.create = function(data, result){
    result(data);
}

Profile.remove = function(id, result){
    result("Delete id " + id + " success");
}

module.exports = Profile;