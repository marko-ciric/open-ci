var mongoose = require('mongoose');
var task = exports = module.exports = {};

exports.states = ['SLEEP', 'PENDING', 'ERROR', 'RUNNING', 'SLEEP'];

task.init = function () {
    this.result = {};
    this.executions = {};
    this.state = this.states[0];
};

task.create = function () {
};

task.start = function (id) {

};

task.stop = function () {};

task.results = [];


