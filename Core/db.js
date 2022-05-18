// OpenKernel Database Engine
// Version 1
// Made by Brenden2008

var PouchDB = require('pouchdb');

module.exports = {
    registry: new PouchDB('registry'),
    files: new PouchDB('files')
}