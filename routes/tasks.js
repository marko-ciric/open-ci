var task = require('../lib/task');
var redis = require('redis');
var winston = require('winston');
var git = require('nodegit');
var async = require('async');

var tasks = exports = module.exports = {};

tasks.list = function (req, res) {
    winston.log('info', 'tasks.list has been called');
    res.render({id: "all tasks go here"});
};

tasks.info = function (req, res) {
    winston.info('tasks.info has been called');
    res.render({
        id: req.id,
        name: "Task info here"
    });
};

tasks.start = function (req, res) {
    winston.info('tasks.start has been called');
};

tasks.stop = function (req, res) {
    winston.info('tasks.stop has been called');
};

tasks.get = function (req, res) {
    winston.info('tasks.get has been called');
};