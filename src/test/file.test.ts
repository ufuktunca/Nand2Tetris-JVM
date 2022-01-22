import { readFile, writeFile } from "../utils/file";
import fs from "fs";
import assert from "assert";

describe("Given file reader function", () => {
  it("When I read a test file", (done) => {
    let lines = [];
    before((done) => {
      lines = readFile("./src/test/test-file.vm");
      done();
    });
    it("Then should return file lines without comments", (done) => {
      assert.equal(lines.length, 3);
      assert.equal(lines[0], "push constant 7");
      assert.equal(lines[1], "push constant 8");
      assert.equal(lines[2], "add");
      done();
    });
    done();
  });
});

describe("Given write file function", () => {
  context("When I write a test file", () => {
    let lines = [];
    before((done) => {
      writeFile(
        "test\ntest1\n2341235\nend-line",
        "./src/test/created-test-file.asm"
      );
      lines = readFile("./src/test/created-test-file.asm");
      done();
    });

    it("Then file should be created", (done) => {
      assert.ok(fs.existsSync("./src/test/created-test-file.asm"));
      done();
    });
    it("Then content of the file should be correct", (done) => {
      assert.equal(lines.length, 4);
      assert.equal(lines[0], "test");
      assert.equal(lines[1], "test1");
      assert.equal(lines[2], "2341235");
      assert.equal(lines[3], "end-line");
      done();
    });
    after(() => {
      fs.unlink("./src/test/created-test-file.asm", (err) => {
        return err;
      });
    });
  });
});
