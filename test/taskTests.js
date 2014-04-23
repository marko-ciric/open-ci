var expect = require('chai').expect;
var task = require('../lib/task');

describe("task", function () {
    describe("#create()", function () {
        it("should exist", function () {
            expect(task.create).to.exist;
        });
        it("should create a task with id", function () {
            var t = task.create();
            expect(t.id).not.to.be.null;
        });
    });
});