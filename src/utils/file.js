"use strict";
exports.__esModule = true;
exports.writeFile = exports.readFile = void 0;
var fs = require("fs");
function readFile(fileLocation) {
    var lines = [];
    var data = fs.readFileSync(fileLocation, "utf-8");
    var arr = data.split("\n");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (i.split("//")[0].trim().length > 0) {
            lines.push(i.split("//")[0].trim());
        }
    }
    return lines;
}
exports.readFile = readFile;
function writeFile(content, fileName) {
    fs.writeFileSync(fileName, content);
}
exports.writeFile = writeFile;
