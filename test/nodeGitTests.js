var clone = require('nodegit').Repo.clone;
var fs = require('fs');
var rimraf = require('rimraf');
var winston = require('winston');

describe('Clone a test repository', function () {
    beforeEach(function () {

    });

    it ('should clone a test repository', function () {
        var cloneRepo = function () {
            clone('https://github.com/marko-ciric/koa-angular.git', 'tmp/'.concat(''), null, function (err, repo) {
                if (err) throw err;
                repo.getBranch('master', function (err, branch) {
                    if (err) throw err;
                    branch.tree(function (err, tree) {
                        if (err) throw err;
                        tree.walk().on('entry', function (err, entry) {
                            entry.name(function (err, name) {
                                winston.log(name);
                            });
                        });
                    });
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
    });

});