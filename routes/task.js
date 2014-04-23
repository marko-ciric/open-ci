var task = require('../lib/task');
var redis = require('redis');
var winston = require('winston');
var git = require('nodegit');
var async = require('async');

var tasks = exports = module.exports = {};

tasks.list = function (req, res) {
    winston.log('info', 'tasks.list has been called');
    res.send({
        id: "all tasks go here"
    });
};

tasks.info = function (req, res) {
    winston.info('tasks.info has been called');
    res.send({
        id: req.id,
        name: "Task info here"
    });
};

tasks.start = function (req, res) {
    winston.info('tasks.start has been called');
    res.send(req.params.id);
};

tasks.stop = function (req, res) {
    winston.info('tasks.stop has been called');
    res.send(req.params.id);
};

tasks.get = function (req, res) {
    winston.info('tasks.get %s has been called', req.params.id);
    res.send(req.params.id);
};