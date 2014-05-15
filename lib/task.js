var mongoose = require('mongoose');
var redis = require('redis');
var Schema = mongoose.Schema;
var TaskSchema = new Schema({
    name: String,
    repo: String
});

var task = exports = module.exports = {};

exports.states = ['SLEEP', 'PENDING', 'ERROR', 'RUNNING', 'SLEEP'];

task.init = function () {
    this.result = {};
    this.executions = {};
    this.state = this.states[0];
};

task.create = function (params, next) {
    var TaskModel = mongoose.model('Task', TaskSchema);
    var task = new TaskModel({name: params.name, repo: params.repo});
    task.save(function (err) {
        if (err) {
            next(err);
        } else {
            next(null, task);
        }
    });
};

task.start = function (id) {

};

task.stop = function () {};

task.results = [];


