// OpenKernel Process Watcher
// Version 1
// Made by Brenden2008

const db = require("./db.js");
const logEngine = require("./logEngine.js");


// every 1 second, check the processes database for any unstarted processes
setInterval(function() {
    db.processes.allDocs({ include_docs: true }).then(function (result) {
        for (const element of result.rows) {
            if (element.doc.status == "unstarted") {
                // start the process
                db.processes.get(element.doc._id).then(function (doc) {
                    doc.status = "started";
                    db.processes.put(doc).then(function (response) {
                        logEngine.write("info", "Started process: " + doc.name);
                    }).catch(function (err) {
                        logEngine.write("error", "Failed to start process: " + doc.name);
                    });
                });
            }
        }
    });
});