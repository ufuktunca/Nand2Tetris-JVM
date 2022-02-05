"use strict";
exports.__esModule = true;
var file_1 = require("./src/utils/file");
var operations_1 = require("./src/operations/operations");
var lines = (0, file_1.readFile)("./SimpleAdd.vm");
var assembly = "";
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    assembly += (0, operations_1.operations)(line);
}
(0, file_1.writeFile)(assembly, "SimpleAdd.asm");
