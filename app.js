
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');
var user = require('./routes/user');
var task = require('./routes/task');

var http = require('http');
var path = require('path');
var clone = require('nodegit').Repo.clone;
var fs = require('fs');
var rimraf = require('rimraf');
var winston = require('winston');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function () {
    app.use(express.errorHandler());
});

app.get('/user', user.list);
app.get('/user/:id', user.get);
app.put('/user', user.create);
app.post('/user/:id', user.save);
app.delete('/user/:id', user.remove);

app.get('/task', task.list);
app.get('/task/:id', task.get);
app.post('/task/:id', task.get);
app.post('/task/:id/start', task.start);
app.post('/task/:id/stop', task.stop);

mongoose.connect('localhost/test', {
    db: { native_parser: true },
    server: { poolSize: 10 }
});

var cloneRepo = function () {
    clone('https://github.com/marko-ciric/koa-angular.git', 'tmp/'.concat(''), null, function (err, repo) {
        if (err) throw err;
        repo.getBranch('master', function (err, branch) {
            if (err) throw err;
            if (branch.tree !== undefined) {
                branch.tree(function (err, tree) {
                    if (err) throw err;
                    tree.walk().on('entry', function (err, entry) {
                        entry.name(function (err, name) {
                            winston.log(name);
                        });
                    });
                });

            }
        });
    });
};

fs.exists('tmp/', function (exists) {
    if (exists) {
        rimraf('tmp/', function (success) {
            winston.log(success);
            cloneRepo();
        });
    } else {
        cloneRepo();
    }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
