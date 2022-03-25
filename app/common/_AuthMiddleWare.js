let isAuth = async function (req, res, next) {
    var _JWT = require('../common/_JWT');
    var _token = req.headers.authorization;
    if(_token){
        try{
            var auhData = await _JWT.check(_token);
            
            req.auth = auhData;
            next();
        }catch(err){
            return res.send({data: "Token not right"});
        }
    }
    else{
        return res.send({data: "We didn't receive any token"});
    }
    console.log(req.headers);
}

module.exports = {
    isAuth: isAuth,
}