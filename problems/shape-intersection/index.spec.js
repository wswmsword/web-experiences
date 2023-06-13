import { strict as assert } from "node:assert";
import shapeIntersection, { isIntersectionLines } from "./shape-intersection.js";

describe("Problem", function() {
  it("should return a pare of intersection lines when the shape is intersecting", function() {
    var [p1, p2, p3, p4] = shapeIntersection("1,1 5,1 7,3 6,4 5,8 3,3" ,"5,5 7,8 7,5");
    assert.deepEqual(p1, [6, 4]);
    assert.deepEqual(p2, [5, 8]);
    assert.deepEqual(p3, [5, 5]);
    assert.deepEqual(p4, [7, 8]);
  });
});

describe("Util isIntersectionLines", function() {
  it("should return false when lines are not intersecting", function() {
    var isIntersection = isIntersectionLines([1, 1], [5, 1], [1, 5], [5, 5]);
    assert.equal(isIntersection, false);

    var isIntersection = isIntersectionLines([1, 1], [1, 5], [5, 1], [5, 5]);
    assert.equal(isIntersection, false);

    var isIntersection = isIntersectionLines([1, 1], [1, 5], [2, 1], [5, 1]);
    assert.equal(isIntersection, false);

    var isIntersection = isIntersectionLines([1, 1], [1, 5], [2, 2], [5, 5]);
    assert.equal(isIntersection, false);

    var isIntersection = isIntersectionLines([1, 1], [3, 3], [4, 0], [4, 10]);
    assert.equal(isIntersection, false);

    var isIntersection = isIntersectionLines([1, 1], [5, 1], [5, 5], [7, 8], true);
    assert.equal(isIntersection, false);
  });

  it("should return true when lines are intersecting", function() {
    var isIntersection = isIntersectionLines([1, 1], [5, 1], [1, 1], [1, 5], true);
    assert.equal(isIntersection, true);

    isIntersection = isIntersectionLines([1, 1], [5, 1], [5, 1], [5, 5]);
    assert.equal(isIntersection, true);

    isIntersection = isIntersectionLines([1, 5], [5, 5], [5, 1], [5, 5]);
    assert.equal(isIntersection, true);

    isIntersection = isIntersectionLines([1, 1], [5, 5], [5, 1], [1, 5]);
    assert.equal(isIntersection, true);

    isIntersection = isIntersectionLines([1, 1], [5, 5], [5, 1], [5, 5]);
    assert.equal(isIntersection, true);

    isIntersection = isIntersectionLines([0.1, 0.1], [0.5, 0.5], [0.5, 0.1], [0.5, 0.5]);
    assert.equal(isIntersection, true);

    isIntersection = isIntersectionLines([-0.1, -0.1], [-0.5, -0.5], [-0.5, -0.1], [-0.5, -0.5]);
    assert.equal(isIntersection, true);
  });
});