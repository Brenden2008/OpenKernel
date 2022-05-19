// OpenKernel Compute Engine
// Version 1
// Made by Brenden2008

const db = require("./db.js");
const logEngine = require("./logEngine.js");
const fs = require("./files.js");

module.exports = {
    executeCommand: async function(commandString) {
        // Get the command from the command database
        db.commands.get(commandString).then(function (doc) {
            // Get the file from the file database
            db.files.get(doc.filePath).then(function (file) {
                // Put the process into the processes database
                
            });
        });
    },
}