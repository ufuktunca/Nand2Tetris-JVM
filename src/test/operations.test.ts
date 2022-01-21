import assert from "assert";
import { operations } from "../operations/operations";

describe("Given want I decide to operation", () => {
  context("When calling operation function", () => {
    it("Then should return push assembly code", () => {
      assert.equal(
        operations("push 15"),
        `
        @${15}
        D=A
        @0
        A=M
        M=D
        @0
        M=M+1
        `
      );
    });
    it("Then should return push assembly code", () => {
      assert.equal(
        operations("add"),
        `
      @0
      A=M
      D=M
      A=A-1
      M=M+D
      @0
      M=M-1
      `
      );
    });
  });
});
