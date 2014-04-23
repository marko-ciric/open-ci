var task = exports = module.exports = {};

task.states = ['SLEEP', 'PENDING', 'ERROR', 'RUNNING', 'SLEEP'];

task.init = function () {
    this.result = {};
    this.executions = {};
    this.state = this.states[0];
};

task.start = function () {};

task.stop = function () {};

task.results = [];


