import { Points } from "../utils/points";
import assert from "assert";

describe("Given RAM pointers", () => {
  const points = Points.getInstance();
  context("When I call them with their names", () => {
    it("Then should return their initial positions", () => {
      assert.equal(points.getVariable("stack"), 256);
      assert.equal(points.getVariable("staticVariables"), 16);
      assert.equal(points.getVariable("temp"), 5);
      assert.equal(points.getVariable("generalPurpose"), 13);
      assert.equal(points.getVariable("SP"), 0);
      assert.equal(points.getVariable("LCL"), 1);
      assert.equal(points.getVariable("ARG"), 2);
      assert.equal(points.getVariable("THIS"), 3);
      assert.equal(points.getVariable("THAT"), 3);
    });
  });
  context("When I calling push function", () => {
    before(() => {
      points.push("stack");
      points.push("staticVariables");
      points.push("temp");
      points.push("generalPurpose");
    });
    it("Then pointers number should increase 1", () => {
      assert.equal(points.getVariable("stack"), 257);
      assert.equal(points.getVariable("staticVariables"), 17);
      assert.equal(points.getVariable("temp"), 6);
      assert.equal(points.getVariable("generalPurpose"), 14);
    });
  });
  context("When I calling pop function", () => {
    before(() => {
      points.push("stack");
      points.push("staticVariables");
      points.push("temp");
      points.push("generalPurpose");
      points.push("stack");
      points.push("staticVariables");
      points.push("temp");
      points.push("generalPurpose");
      points.pop("stack");
      points.pop("staticVariables");
      points.pop("temp");
      points.pop("generalPurpose");
    });
    it("Then pointers number should increase 1", () => {
      assert.equal(points.getVariable("stack"), 258);
      assert.equal(points.getVariable("staticVariables"), 18);
      assert.equal(points.getVariable("temp"), 7);
      assert.equal(points.getVariable("generalPurpose"), 15);
    });
  });
});
