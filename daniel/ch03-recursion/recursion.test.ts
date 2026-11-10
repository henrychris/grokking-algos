import { describe, expect, test } from "bun:test";
import { countdown, factorial, sum } from "./recursion";

// Run with: bun test

describe("factorial", () => {
  test("base cases: 0! and 1! are 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  test("small values", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3_628_800);
  });

  test("rejects negative and non-integer input", () => {
    expect(() => factorial(-1)).toThrow(RangeError);
    expect(() => factorial(2.5)).toThrow(RangeError);
  });
});

describe.only("sum", () => {
  test("empty array is 0", () => {
    expect(sum([])).toBe(0);
  });

  test("single element", () => {
    expect(sum([7])).toBe(7);
  });

  test("multiple elements, including negatives", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([-5, 5, 10])).toBe(10);
  });

  test("does not mutate input", () => {
    const arr = [1, 2, 3];
    sum(arr);
    expect(arr).toEqual([1, 2, 3]);
  });
});

describe("countdown", () => {
  test("zero returns [0]", () => {
    expect(countdown(0)).toEqual([0]);
  });

  test("counts down to zero", () => {
    expect(countdown(3)).toEqual([3, 2, 1, 0]);
  });

  test("negative input stops at the base case", () => {
    expect(countdown(-2)).toEqual([0]);
  });
});
