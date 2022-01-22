import assert from "assert";
import { operations } from "../operations/operations";

describe("Given want I decide to operation", () => {
  context("When calling operation function", () => {
    it("Then should return push assembly code", () => {
      assert.equal(
        operations("push constants 15"),
        `@${15}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`
      );
    });
    it("Then should return push assembly code", () => {
      assert.equal(
        operations("add"),
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`
      );
    });
  });
});
