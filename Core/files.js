// OpenKernel Files Engine
// Version 1
// Made by Brenden2008

const db = require("./db.js");
const logEngine = require("./logEngine.js");

module.exports = {
    create: async function (fileName, fileContent, filePath) {
        return db.files.put({
            _id: filePath,
            fileName: fileName,
            fileContent: fileContent,
            filePath: filePath,
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            await logEngine.write("error", "Failed to create file: " + fileName + " at path: " + filePath);
            return err;
        });
    },
    read: async function (filePath) {
        return db.files.get(filePath).then(function (doc) {
            return doc;
        }).catch(function (err) {
            await logEngine.write("error", "Failed to read file at path: " + filePath);
            return err;
        });
    },
    update: async function (fileName, fileContent, filePath) {
        return db.files.get(filePath).then(function (doc) {
            return db.files.put({
                _id: filePath,
                _rev: doc._rev,
                fileName: fileName,
                fileContent: fileContent,
                filePath: filePath,
            });
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            await logEngine.write("error", "Failed to update file: " + fileName + " at path: " + filePath);
            return err;
        });
    },
    delete: async function (filePath) {
        return db.files.get(filePath).then(function (doc) {
            return db.files.remove(doc);
        }).then(function (result) {
            return result;
        }).catch(function (err) {
            await logEngine.write("error", "Failed to delete file at path: " + filePath);
            return err;
        });
    },
    list: async function () {
        return db.files.allDocs({ include_docs: true }).then(function (result) {
            var fileList = []
            for (const element of result.rows) {
                fileList.push(element.doc)
            }
            return fileList;
        }).catch(function (err) {
            await logEngine.write("error", "Failed to list files");
            return err;
        });
    },
}