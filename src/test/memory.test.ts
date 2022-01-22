import assert from "assert";
import { Memory } from "../operations/memory";

describe("Given want to make push operation", () => {
  const memory = new Memory();
  context("When making operation with 'push 6'", () => {
    const result = memory.push(6);
    it("Then should push operation in assembly language with number 6", () => {
      assert.equal(result, `@${6}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`);
    });
  });
});

describe("Given want to decide memory operation type", () => {
  const memory = new Memory();
  context("When deciding operation type with 'push 7'", () => {
    const result = memory.decide("push constants 15");
    it("Then should push operation in assembly language with number 6", () => {
      assert.equal(result, `@${15}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`);
    });
  });
});
