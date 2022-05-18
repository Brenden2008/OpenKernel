// OpenKernel Database Engine
// Version 1
// Made by Brenden2008

const PouchDB = require('pouchdb');
const Keyv = require('keyv');
const logEngine = require("./logEngine.js");

module.exports = {
    registry: new PouchDB('registry'),
    files: new PouchDB('files'),
    logs: new PouchDB('logs'),
    cache: new Keyv(),
}

module.exports.cache.on('error', err => logEngine.write("error", "Failed to connect cache: " + err));