import { readFile } from "../utils/fileReader";
import assert from "assert";

describe("Given file reader function", () => {
  context("When I read a test file", () => {
    const lines = readFile("test-file");
    it("Then should return file lines without comments", () => {
      assert.equal(lines.length, 3);
      assert.equal(lines[0], "push constant 7");
      assert.equal(lines[1], "push constant 8");
      assert.equal(lines[1], "add");
    });
  });
});
