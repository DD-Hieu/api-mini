const db = require('../common/connect');
const Account = function(account){
    this.ID_Account = account.ID_Account;
    this.ID_Login = account.ID_Login;
    this.Password = account.Password;
}

Account.get_all = function(result){
    db.query("SELECT * FROM Account", function(err, account){
        if(err){
            result(null);
        }
        else {
            result(account);
        }
    });
}

Account.getById = function(id, result){
    db.query("SELECT * FROM Account WHERE ID_Account = ?", id, function(err, account){
        if(err || account.length == 0){
            result(null);
        }
        else {
            result(account[0]);
        }
    });
}

Account.create = function(data, result){
    db.query("INSERT into Account SET ?", data, function(err, account){
        if(err){
            result(null);
        }
        else {
            result({id: account.insertId, ...data});
        }
    })
}

Account.remove = function(id, result){
    db.query("DELETE FROM Account WHERE ID_Account = ?", id, function(err, account){
        if(err){
            result(null);
        }
        else {
            result("Success in delete account id " + id);
        }
    });
}

Account.update = function(data, result){
    db.query("UPDATE Account SET ID_Login=?, Password=? WHERE ID_Account=?", [data.ID_Login, data.Password, data.ID_Account], function(err, account){
        if(err){
            result(null);
        }
        else {
            result(data);
        }
    })
}

Account.check_login = function(data, result){
    db.query("SELECT * FROM Account WHERE ID_Login = ? AND Password = ?", [data.ID_Login, data.Password], function(err, account){
        if(err || account.length == 0){
            result(null);
        }
        else {
            result(account[0]);
        }
    });
}

module.exports = Account;