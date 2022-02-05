"use strict";
exports.__esModule = true;
exports.Arithmatics = void 0;
var Arithmatics = /** @class */ (function () {
    function Arithmatics() {
    }
    Arithmatics.prototype.add = function () {
        return "@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n";
    };
    Arithmatics.prototype.eq = function () {
        return "@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D+M\n@TRUE\nD;JGE\n@FALSE\n(TRUE)\nM=1\n@INCREASE-ADDRESS\n(FALSE)\nM=-1\n(INCREASE-ADDRESS)\n@0\nM=M+1\n";
    };
    Arithmatics.prototype.calculate = function (line) {
        if (line.includes("add")) {
            return this.add();
        }
        if (line.includes("eq")) {
            return this.eq();
        }
    };
    return Arithmatics;
}());
exports.Arithmatics = Arithmatics;
