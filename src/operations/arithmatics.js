"use strict";
exports.__esModule = true;
exports.Arithmatics = void 0;
var Arithmatics = /** @class */ (function () {
    function Arithmatics() {
        this.iteration = 0;
    }
    Arithmatics.prototype.add = function () {
        return "@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n";
    };
    Arithmatics.prototype.eq = function () {
        return "@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-".concat(this.iteration, "\nD;JEQ\n@FALSE-").concat(this.iteration, "\n0;JMP\n(TRUE-").concat(this.iteration, ")\n@0\nA=M\nM=1\n@INCREASE-ADDRESS-").concat(this.iteration, "\n0;JMP\n(FALSE-").concat(this.iteration, ")\n@0\nA=M\nM=-1\n(INCREASE-ADDRESS-").concat(this.iteration, ")\n@0\nM=M+1\n");
    };
    Arithmatics.prototype.calculate = function (line) {
        if (line.includes("add")) {
            return this.add();
        }
        if (line.includes("eq")) {
            this.iteration += 1;
            return this.eq();
        }
    };
    return Arithmatics;
}());
exports.Arithmatics = Arithmatics;
