import assert from "assert";
import { Arithmatics } from "../operations/arithmatics";

describe("Given want to decide operation", () => {
  let arithmatics;
  before(()=>{
     arithmatics = new Arithmatics();
  })
  it("When calling add function", () => {
    const result = arithmatics.add();
    context("Then should return add operation in assembly language", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`);
    });
  });
  it("When calling calculate function with add", () => {
    const result = arithmatics.calculate("add");
    context("Then should add operation in assembly language", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`);
    });
  });
  it("When calling calculate function with eq", () => {
    const result = arithmatics.calculate("eq");
    context("Then should eq operation in assembly language", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-1\nD;JEQ\n@FALSE-1\n0;JMP\n(TRUE-1)\n@0\nA=M\nM=-1\n@INCREASE-ADDRESS-1\n0;JMP\n(FALSE-1)\n@0\nA=M\nM=0\n(INCREASE-ADDRESS-1)\n@0\nM=M+1\n`
      );
    });
  });
  it("When I call the eq second time iteration number should be increase", () => {
    const result = arithmatics.calculate("eq");
    context("Then should return eq operation in assembly language with iteration number 2", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-2\nD;JEQ\n@FALSE-2\n0;JMP\n(TRUE-2)\n@0\nA=M\nM=-1\n@INCREASE-ADDRESS-2\n0;JMP\n(FALSE-2)\n@0\nA=M\nM=0\n(INCREASE-ADDRESS-2)\n@0\nM=M+1\n`
      );
    });
  });
  it("When I call calculate function with lt", () => {
    const result = arithmatics.calculate("lt");
    context("Then should return lt should return in assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-3\nD;JGT\n@FALSE-3\n0;JMP\n(TRUE-3)\n@0\nA=M\nM=-1\n@INCREASE-ADDRESS-3\n0;JMP\n(FALSE-3)\n@0\nA=M\nM=0\n(INCREASE-ADDRESS-3)\n@0\nM=M+1\n`
      );
    });
  });
  it("When I call calculate function with gt", () => {
    const result = arithmatics.calculate("gt");
    context("Then should return gt should return in assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-4\nD;JLT\n@FALSE-4\n0;JMP\n(TRUE-4)\n@0\nA=M\nM=-1\n@INCREASE-ADDRESS-4\n0;JMP\n(FALSE-4)\n@0\nA=M\nM=0\n(INCREASE-ADDRESS-4)\n@0\nM=M+1\n`
      );
    });
  });
  it("When I call calculate function with sub", () => {
    const result = arithmatics.calculate("sub");
    context("Then should return sub operation in assembly language", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M-D\n@0\nM=M-1\n`);
    });
  });
  it("When I call calculate function with neg", () => {
    const result = arithmatics.calculate("neg");
    context("Then should return sub operation in assembly language", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nM=-M\n`);
    });
  });
  it("When I call calculate function with and", () => {
    const result = arithmatics.calculate("and");
    context("Then should return and in assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=D&M\n@0\nM=M-1\n`
      );
    });
  });
  it("When I call calculate function with or", () => {
    const result = arithmatics.calculate("or");
    context("Then or should return in assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=D|M\n@0\nM=M-1\n`
      );
    });
  });
  it("When I call calculate function with not", () => {
    const result = arithmatics.calculate("not");
    context("Then not should return in assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nM=!M\n`
      );
    });
  });
});
