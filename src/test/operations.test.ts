import assert from "assert";
import { operations } from "../operations/operations";
import { Points } from "../utils/points";

describe("Given want I decide to operation", () => {
  const points = Points.getInstance();
  context("When calling operation function with push", () => {
    const result = operations("push constant 15");
    it("Then should return push assembly code", () => {
      assert.equal(result, `@${15}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`);
    });
  });
  context("When calling operation function with add", () => {
    const result = operations("add");
    it("Then should return add assembly code", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`);
    });
  });
  context("When calling operation function with eq", () => {
    const result = operations("eq");
    it("Then should return eq assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-1\nD;JEQ\n@FALSE-1\n0;JMP\n(TRUE-1)\n@0\nA=M\nM=-1\n@INCREASE-ADDRESS-1\n0;JMP\n(FALSE-1)\n@0\nA=M\nM=0\n(INCREASE-ADDRESS-1)\n@0\nM=M+1\n`
      );
    });
  });
  context("When calling operation function with lt", () => {
    const result = operations("lt");
    it("Then should return lt assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-2\nD;JGT\n@FALSE-2\n0;JMP\n(TRUE-2)\n@0\nA=M\nM=-1\n@INCREASE-ADDRESS-2\n0;JMP\n(FALSE-2)\n@0\nA=M\nM=0\n(INCREASE-ADDRESS-2)\n@0\nM=M+1\n`
      );
    });
  });
  context("When calling operation function with gt", () => {
    const result = operations("gt");
    it("Then should return lt assembly code", () => {
      assert.equal(
        result,
        `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-3\nD;JLT\n@FALSE-3\n0;JMP\n(TRUE-3)\n@0\nA=M\nM=-1\n@INCREASE-ADDRESS-3\n0;JMP\n(FALSE-3)\n@0\nA=M\nM=0\n(INCREASE-ADDRESS-3)\n@0\nM=M+1\n`
      );
    });
  });
  context("When calling operation function with sub", () => {
    const result = operations("sub");
    it("Then should return add assembly code", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M-D\n@0\nM=M-1\n`);
    });
  });
  context("When calling operation function with ", () => {
    const result = operations("neg");
    it("Then should return add assembly code", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nM=-M\n`);
    });
  });
  context("When calling operation function with and", () => {
    const result = operations("and");
    it("Then should return and assembly code", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=D&M\n@0\nM=M-1\n`);
    });
  });
  context("When calling operation function with or", () => {
    const result = operations("or");
    it("Then should return or assembly code", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=D|M\n@0\nM=M-1\n`);
    });
  });
  context("When calling operation function with not", () => {
    const result = operations("not");
    it("Then should return not assembly code", () => {
      assert.equal(result, `@0\nA=M\nA=A-1\nM=!M\n`);
    });
  });
  context("When calling operation function with local", () => {
    const result = operations("push local 5");
    it("Then should return push local assembly code", () => {
      assert.equal(
        result,
        `@${points.getVariable("LCL")}\nA=M+5\nD=M\n@0\nA=M\nM=D\n@0\nM=M+1\n`
      );
    });
  });
  context("When calling operation function with local", () => {
    const result = operations("pop local 7");
    it("Then should return pop local assembly code", () => {
      assert.equal(
        result,
        `@0\nM=M-1\nA=M\nD=M\n@${points.getVariable("LCL")}\nA=M+7\nM=D\n`
      );
    });
  });
  context("When calling operation function with argument", () => {
    const result = operations("push argument 33");
    it("Then should return push argument assembly code", () => {
      assert.equal(result, `@33\nD=A\n@2\nA=M\nM=D\n@2\nM=M+1\n`);
    });
  });
});
