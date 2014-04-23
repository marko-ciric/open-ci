var expect = require('chai').expect;
var task = require('../lib/task');

describe("task", function () {
    describe("create", function () {
        it("should exist", function () {
            expect(task.create).to.exist;
        });
        it("should create a task with id", function () {
            var t = task.create();
            expect(t.id).not.to.be.null;
        });
        it("should have a git repo", function () {
            var t = task.create({repo: "git"});
            expect(t.repo).to.be.null;
        });
    });

    describe("save", function () {
        it("should update git repo", function () {
            var t = task.create({
               id: "1", repo: "git://repo1.org"
            });
            expect(t.repo).to.equal("git://repo1.org");
            t.repo = "git://repo2.org";
            t = task.save(t);
            expect(t.repo).to.equal("git://repo2.org");
        });
    });
});