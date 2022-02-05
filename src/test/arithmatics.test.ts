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
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D+M\n@TRUE\nD;JGE\n@FALSE\n(TRUE)\nM=1\n@INCREASE-ADDRESS\n(FALSE)\nM=-1\n(INCREASE-ADDRESS)\n@0\nM=M+1\n`
      );
    });
  });
});
