//var assert = require('assert');
import { Points } from "./points";
import assert from "assert";

describe("Given RAM pointers", function () {
  const points = Points.getInstance();
  context("When I call them with their names", function () {
    it("Then should return their initial positions", function () {
      assert.equal(points.getVariable("stack"), 256);
      assert.equal(points.getVariable("staticVariables"), 16);
      assert.equal(points.getVariable("temp"), 5);
      assert.equal(points.getVariable("generalPurpose"), 13);
      assert.equal(points.getVariable("SP"), 0);
      assert.equal(points.getVariable("LCL"), 1);
      assert.equal(points.getVariable("ARG"), 2);
      assert.equal(points.getVariable("THIS"), 3);
      assert.equal(points.getVariable("THAT"), 4);
    });
  });
  context("When I calling push function", function () {
    before(function () {
      points.push("stack");
      points.push("staticVariables");
      points.push("temp");
      points.push("generalPurpose");
      points.push("SP");
      points.push("LCL");
      points.push("ARG");
      points.push("THIS");
      points.push("THAT");
    });
    it("Then pointers number should increase 1", function () {
      assert.equal(points.getVariable("stack"), 257);
      assert.equal(points.getVariable("staticVariables"), 17);
      assert.equal(points.getVariable("temp"), 6);
      assert.equal(points.getVariable("generalPurpose"), 14);
    });
  });
});
