exports.list = function(req, res){
    res.sendFile(__dirname.replace('app\\controllers', '') +'/index.html');
}

exports.detail = function(req, res){
    res.send('ID');
};