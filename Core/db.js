// OpenKernel Database Engine
// Version 1
// Made by Brenden2008

const PouchDB = require('pouchdb');
const Keyv = require('keyv');
const logEngine = require("./logEngine.js");

var cloudcouch = require("./config/db_config.js");

if (cloudcouch.useCloud) {
    module.exports = {
        registry: new PouchDB(cloudcouch.cloudProtocol + cloudcouch.cloudUsername + ':' + cloudcouch.cloudPassword + '@' + cloudcouch.cloudURL + '/' + cloudcouch.cloudUsername + '-' + 'registry'),
        commands: new PouchDB(cloudcouch.cloudProtocol + cloudcouch.cloudUsername + ':' + cloudcouch.cloudPassword + '@' + cloudcouch.cloudURL + '/' + cloudcouch.cloudUsername + '-' + 'commands'),
        files: new PouchDB(cloudcouch.cloudProtocol + cloudcouch.cloudUsername + ':' + cloudcouch.cloudPassword + '@' + cloudcouch.cloudURL + '/' + cloudcouch.cloudUsername + '-' + 'files'),
        logs: new PouchDB(cloudcouch.cloudProtocol + cloudcouch.cloudUsername + ':' + cloudcouch.cloudPassword + '@' + cloudcouch.cloudURL + '/' + cloudcouch.cloudUsername + '-' + 'logs'),
        cache: new Keyv(),
        processes: new PouchDB(cloudcouch.cloudProtocol + cloudcouch.cloudUsername + ':' + cloudcouch.cloudPassword + '@' + cloudcouch.cloudURL + '/' + cloudcouch.cloudUsername + '-' + 'processes'),
    }
} else {
    module.exports = {
        registry: new PouchDB('registry'),
        commands: new PouchDB('commands'),
        files: new PouchDB('files'),
        logs: new PouchDB('logs'),
        cache: new Keyv(),
        processes: new PouchDB('processes'),
    }
}