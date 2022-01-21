import assert from "assert";
import { Memory } from "../operations/memory";

describe("Given want to make push operation", () => {
  const memory = new Memory();
  context("When making operation with 'push 6'", () => {
    const result = memory.push(6);
    it("Then should push operation in assembly language with number 6", () => {
      assert.equal(
        result,
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

describe("Given want to decide memory operation type", () => {
  const memory = new Memory();
  context("When deciding operation type with 'push 7'", () => {
    const result = memory.decide("push 15");
    it("Then should push operation in assembly language with number 6", () => {
      assert.equal(
        result,
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
  });
});
