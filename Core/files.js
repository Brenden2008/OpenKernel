// OpenKernel Files Engine
// Version 1
// Made by Brenden2008

const db = require("./db.js");

module.exports = {
    create: function (fileName, fileContent, filePath) {
        db.files.put({
            _id: filePath,
            fileName: fileName,
            fileContent: fileContent,
            filePath: filePath,
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            console.error(err);
            return err;
        });
    },
    read: "",
    update: "",
    delete: "",
    list: "",
}