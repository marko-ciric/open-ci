var task = require('../lib/task');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};