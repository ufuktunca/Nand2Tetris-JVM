import assert from "assert";
import { Memory } from "../operations/memory";

describe("Given want to make push operation", () => {
  const memory = new Memory();
  context("When making operation", () => {
    it("Then should push operation in assembly language with number 6", () => {
      assert.equal(
        memory.push(6),
        `
        @${6}
        D=A
        @0
        A=M
        M=D
        @0
        M=M+1
        `
      );
    });
  });
});
