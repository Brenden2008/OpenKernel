// OpenKernel Command Engine
// Version 1
// Made by Brenden2008

const db = require("./db.js");
const logEngine = require("./logEngine.js");

module.exports = {
    // Register a command in the registry
    registerCommand: async function(command, filePath) {
        return db.commands.put({
            _id: command,
            command: command,
            filePath: filePath,
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            logEngine.write("error", "Failed to register command: " + command + " at path: " + filePath);
            return err;
        });
    },
    // Unregister a command in the registry
    unregisterCommand: async function(command) {
        return db.commands.get(command).then(function (doc) {
            return db.commands.remove(doc);
        }).then(function (result) {
            return result;
        }).catch(function (err) {
            logEngine.write("error", "Failed to unregister command: " + command);
            return err;
        });
    },
    // List all commands in the commands
    listCommands: async function() {
        return db.commands.allDocs({ include_docs: true }).then(function (result) {
            var commandList = []
            for (const element of result.rows) {
                commandList.push(element.doc)
            }
            return commandList;
        }).catch(function (err) {
            logEngine.write("error", "Failed to list commands");
            return err;
        });
    },
    // get a command from the commands
    getCommand: async function(command) {
        return db.commands.get(command).then(function (doc) {
            return doc;
        }).catch(function (err) {
            logEngine.write("error", "Failed to get command: " + command);
            return err;
        });
    },
    // Execute a command
    executeCommand: async function(commandString) {
        return db.commands.get(commandString).then(function (doc) {
            db.files.get(doc.filePath).then(function (file) {
                return eval(file.fileContent);
            });
        }).catch(function (err) {
            logEngine.write("error", "Failed to execute command: " + command);
            return err;
        });
    }
}