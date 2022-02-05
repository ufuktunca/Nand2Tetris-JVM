import assert from "assert";
import { operations } from "../operations/operations";

describe("Given want I decide to operation", () => {
  context("When calling operation function with push", () => {
    const result = operations("push constants 15");
    it("Then should return push assembly code", () => {
      assert.equal(result, `@${15}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`);
    });
  });
  context("When calling operation function with add", () => {
    const result = operations("add");
    it("Then should return add assembly code", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`);
    });
  });
  context("When calling operation function with eq", () => {
    const result = operations("eq");
    it("Then should return eq assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-1\nD;JEQ\n@FALSE-1\n0;JMP\n(TRUE-1)\n@0\nA=M\nM=1\n@INCREASE-ADDRESS-1\n0;JMP\n(FALSE-1)\n@0\nA=M\nM=-1\n(INCREASE-ADDRESS-1)\n@0\nM=M+1\n`
      );
    });
  });
  context("When calling operation function with lt", () => {
    const result = operations("lt");
    it("Then should return lt assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-2\nD;JGT\n@FALSE-2\n0;JMP\n(TRUE-2)\n@0\nA=M\nM=1\n@INCREASE-ADDRESS-2\n0;JMP\n(FALSE-2)\n@0\nA=M\nM=-1\n(INCREASE-ADDRESS-2)\n@0\nM=M+1\n`
      );
    });
  });
});
