var EventEmitter    = require("events").EventEmitter,
    util            = require("util"),
    xmlrpc          = require("xmlrpc");

/**
 * Creates a Client object for making XML-RPC calls to Glances server.
 *
 * @constructor
 * @param {String} url - Server options to make the HTTP request to.
 *                       Either a URI string (e.g. 'http://localhost:61209')
 *
 * @return {Client}
 */
function Client(options) {
    // Sets default path on which Glances serves the XMLRPC server
    if (!options.path) options.path = "/RPC2";
    // Sets default port on which Glances serves the XMLRPC server
    if (!options.port) options.port = 61209;

    this.client = xmlrpc.createClient(options);

    return this;
}

Client.prototype.call = function(method, callback) {
    this.client.methodCall(method, [], callback);
}

module.exports = Client