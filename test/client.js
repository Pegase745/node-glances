var client = require("../lib/node-glances.js"),
    should = require("should");

// should return an error when a non object is passed to the client
// should return an error when host is not passed to the object
// should get host, path or port in the object
// should return an error if host in not reachable
describe('Client', function() {
    it('should return an Error when non object is passed to create the client', function() {
        client.createClient('i am a string').should.be.an.instanceof(Error);
    });
});