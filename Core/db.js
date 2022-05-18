// OpenKernel Database Engine
// Version 1
// Made by Brenden2008

const PouchDB = require('pouchdb');
const Keyv = require('keyv');
const logEngine = require("./logEngine.js");

var cloudcouch = require("./config/db_config.js");

if (cloudcouch.useCloud) {
    module.exports = {
        registry: new PouchDB(cloudcouch.cloudProtocol + cloudcouch.cloudUsername + ':' + cloudcouch.cloudPassword + '@' + cloudcouch.cloudURL + '/registry'),
        files: new PouchDB(cloudcouch.cloudProtocol + cloudcouch.cloudUsername + ':' + cloudcouch.cloudPassword + '@' + cloudcouch.cloudURL + '/files'),
        logs: new PouchDB(cloudcouch.cloudProtocol + cloudcouch.cloudUsername + ':' + cloudcouch.cloudPassword + '@' + cloudcouch.cloudURL + '/logs'),
        cache: new Keyv(),
    }
} else {
    module.exports = {
        registry: new PouchDB('registry'),
        files: new PouchDB('files'),
        logs: new PouchDB('logs'),
        cache: new Keyv(),
    }
}