import { readFile } from "../utils/file";
import assert from "assert";
import { Arithmatics } from "../operations/arithmatics";

describe("Given want to make add operation", () => {
  const arithmatics = new Arithmatics();
  context("When calling add function", () => {
    const result = arithmatics.add();
    it("Then should return add operation in assembly language", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`);
    });
  });
});

describe("Given want to decide operation", () => {
  const arithmatics = new Arithmatics();
  context("When calling calculate function with add", () => {
    const result = arithmatics.calculate("add");
    it("Then should add operation in assembly language", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`);
    });
  });
  context("When calling calculate function with eq", () => {
    const result = arithmatics.calculate("eq");
    it("Then should eq operation in assembly language", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-1\nD;JEQ\n@FALSE-1\n0;JMP\n(TRUE-1)\n@0\nA=M\nM=1\n@INCREASE-ADDRESS-1\n0;JMP\n(FALSE-1)\n@0\nA=M\nM=-1\n(INCREASE-ADDRESS-1)\n@0\nM=M+1\n`
      );
    });
  });
  context("When I call the eq second time iteration number should be increase", () => {
    const result = arithmatics.calculate("eq");
    it("Then should return eq operation in assembly language with iteration number 2", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-2\nD;JEQ\n@FALSE-2\n0;JMP\n(TRUE-2)\n@0\nA=M\nM=1\n@INCREASE-ADDRESS-2\n0;JMP\n(FALSE-2)\n@0\nA=M\nM=-1\n(INCREASE-ADDRESS-2)\n@0\nM=M+1\n`
      );
    });
  });
  context("When I call calculate function with lt", () => {
    const result = arithmatics.calculate("lt");
    it("Then should return lt should return in assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-3\nD;JGT\n@FALSE-3\n0;JMP\n(TRUE-3)\n@0\nA=M\nM=1\n@INCREASE-ADDRESS-3\n0;JMP\n(FALSE-3)\n@0\nA=M\nM=-1\n(INCREASE-ADDRESS-3)\n@0\nM=M+1\n`
      );
    });
  });
});
