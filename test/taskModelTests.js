var chai = require('chai');
var expect = chai.expect;
var mongoose = require('Mongoose');

var mongo = null;

describe('taskModel', function () {

    beforeEach(function () {
        mongoose.connect('mongodb://localhost/open-ci-test', {server: {pool_size: 5 }}, function (err, db) {
            if (err) throw err;
        });
    });

    it('should be persisted properly in mongodb', function () {
        var taskSchema = new mongoose.Schema({
            name: String,
            repo: String
        });
        expect(taskSchema).not.to.be.null;
        var Task = mongoose.model('Task', taskSchema);
        var task = new Task({name: 'name', repo: 'repo'});
        task.save(function (err) {
            if (err) {
                console.error(err);
            } else {
                expect(task).to.equal({name: 'name', repo: 'repo'});
                done();
            }
        });
    });
});