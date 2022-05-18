// OpenKernel Log Engine
// Version 1
// Made by Brenden2008

const db = require("./db.js");

module.exports = {
    // Write a log entry to the log database with the given log level and message
    write: async function (logLevel, message) {
        return db.logs.put({
            _id: JSON.stringify(Date.now()),
            date: JSON.stringify(Date.now()),
            logLevel: logLevel,
            message: message,
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            return err;
        });
    },
    // Read all log entries from the log database
    read: async function () {
        return db.logs.allDocs({ include_docs: true }).then(function (result) {
            var logList = []
            for (const element of result.rows) {
                logList.push(element.doc)
            }
            return logList;
        }).catch(function (err) {
            return err;
        });
    },
    // Get a specific log entry from the log database by its ID
    get: async function (id) {
        return db.logs.get(id).then(function (doc) {
            return doc;
        }).catch(function (err) {
            return err;
        });
    }
}