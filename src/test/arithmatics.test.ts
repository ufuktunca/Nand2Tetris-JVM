import { readFile } from "../utils/fileReader";
import assert from "assert";
import { Arithmatics } from "../operations/arithmatics";

describe("Given want to make add operation", () => {
  const arithmatics = new Arithmatics();
  context("When making operation", () => {
    it("Then should add operation in assembly language", () => {
      assert.equal(
        arithmatics.add(),
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
