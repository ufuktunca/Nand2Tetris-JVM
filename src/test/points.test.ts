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
      assert.equal(points.getVariable("local"), 300);
      assert.equal(points.getVariable("argument"), 400);
      assert.equal(points.getVariable("this"), 3000);
      assert.equal(points.getVariable("that"), 3010);
    });
  });
});
