import assert from "assert";
import { Memory } from "../operations/memory";

describe("Given want to make push operation", () => {
  let memory
  beforeEach(()=>{
    memory = new Memory();
  })
  it("When making operation with 'push constant 6'", () => {
    const result = memory.decide("push constant 6");
    context("Then should push operation in assembly language with number 6", () => {
      assert.equal(result, `@${6}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`);
    });
  });
  it("When deciding operation type with 'push local 90'", () => {
    const result = memory.decide("push local 90");
    context("Then should push operation in assembly language with number push local 90", () => {
      assert.equal(result, `@90\nD=A\n@1\nA=M\nM=D\n@1\nM=M+1\n`);
    });
  });
});
