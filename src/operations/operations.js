"use strict";
exports.__esModule = true;
exports.operations = void 0;
var arithmatics_1 = require("./arithmatics");
var memory_1 = require("./memory");
var arithmatics = new arithmatics_1.Arithmatics();
var memory = new memory_1.Memory();
function operations(line) {
    if (arithmaticOperation(line)) {
        return arithmatics.calculate(line);
    }
    if (memoryOperation(line)) {
        return memory.decide(line);
    }
}
exports.operations = operations;
function arithmaticOperation(line) {
    return line.includes("add") || line.includes("eq");
}
function memoryOperation(line) {
    return line.includes("push");
}
