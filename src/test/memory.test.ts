import assert from "assert";
import { Memory } from "../operations/memory";
import { Points } from "../utils/points";

describe("Given want to make push operation", () => {
  let memory;
  let points;
  beforeEach(() => {
    memory = new Memory();
    points = Points.getInstance();
  });
  it("When making operation with 'push constant 6'", () => {
    const result = memory.decide("push constant 6");
    context(
      "Then should push operation in assembly language with number 6",
      () => {
        assert.equal(result, `@${6}\nD=A\n@sdfasfasfasas0\nA=M\nM=D\n@0\nM=M+1\n`);
      }
    );
  });
  it("When deciding operation type with 'push local 4'", () => {
    const result = memory.decide("push local 4");
    context(
      "Then should push operation in assembly language with number push local 4",
      () => {
        assert.equal(result, `@${300 + 4}\nD=M\n@0\nA=M\nM=D\n@0\nM=M+1\n`);
      }
    );
  });
  it("When deciding operation type with 'pop local 10'", () => {
    const result = memory.decide("pop local 10");
    context(
      "Then should push operation in assembly language with number pop local 10",
      () => {
        assert.equal(result, `@0\nM=M-1\nA=M\nD=M\n@${300 + 10}\nM=D\n`);
      }
    );
  });
  it("When deciding operation type with 'push argument 54'", () => {
    const result = memory.decide("push argument 54");
    context(
      "Then should push operation in assembly language with number push local 90",
      () => {
        assert.equal(result, `@${400 + 54}\nD=M\n@0\nA=M\nM=D\n@0\nM=M+1\n`);
      }
    );
  });
  it("When deciding operation type with 'pop argument 25'", () => {
    const result = memory.decide("pop argument 25");
    context(
      "Then should push operation in assembly language with number push local 90",
      () => {
        assert.equal(result, `@0\nM=M-1\nA=M\nD=M\n@${400 + 25}\nM=D\n`);
      }
    );
  });
});
