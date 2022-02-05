"use strict";
exports.__esModule = true;
exports.Memory = void 0;
var Memory = /** @class */ (function () {
    function Memory() {
    }
    Memory.prototype.push = function (ramLocation) {
        return "@".concat(ramLocation, "\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n");
    };
    Memory.prototype.decide = function (line) {
        if (line.includes("push")) {
            return this.push(parseInt(line.split(" ")[2], 10));
        }
    };
    return Memory;
}());
exports.Memory = Memory;
