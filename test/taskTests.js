var expect = require('chai').expect;
var winston = require('winston');
var task = require('../lib/task');

describe("task", function () {
    describe("create", function () {
        it("should exist", function () {
            task.create({name: 'test', repo: 'test'}, function (err, response) {
                expect(response).to.exist;
                done();
            });
        });
        it("should create a task with id", function () {
            task.create({name: 'test', repo: 'test'}, function (err, response) {
                expect(response.id).to.exist;
                console.log('Task ID = ', response.id);
                done();
            });
        });
        it("should have a git repo", function () {
            task.create({name: 'test', repo: 'test'}, function (err, response) {
                expect(response.repo).to.equal('test');
                done();
            });
        });
    });

    describe("save", function () {
        it("should update git repo", function () {
        });
    });
});