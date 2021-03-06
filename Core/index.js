// OpenKernel Core
// Version 1
// Made by Brenden2008

const fs = require("./files.js");
const db = require("./db.js");
const logEngine = require("./logEngine.js");
const plugins = require("./plugins.js");
const commandEngine = require("./commandEngine.js");

module.exports = {
    files: fs,
    db: db,
    commandEngine: commandEngine,
    computeEngine: {},
    logEngine: logEngine,
    plugins: plugins,
}