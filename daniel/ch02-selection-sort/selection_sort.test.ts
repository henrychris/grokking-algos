import { describe, expect, test } from "bun:test";
import { selectionSort } from "./selection_sort";

// Run with: bun test
// Contract: selectionSort(arr) -> new array sorted ascending; input untouched.

describe("trivial inputs", () => {
  test("empty array", () => {
    expect(selectionSort([])).toEqual([]);
  });

  test("single element", () => {
    expect(selectionSort([4])).toEqual([4]);
  });

  test("two elements, out of order", () => {
    expect(selectionSort([2, 1])).toEqual([1, 2]);
  });
});

describe("ordering", () => {
  test("already sorted", () => {
    expect(selectionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("reverse sorted", () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("unsorted", () => {
    expect(selectionSort([3, 7, 1, 9, 2, 8])).toEqual([1, 2, 3, 7, 8, 9]);
  });

  test("all equal", () => {
    expect(selectionSort([2, 2, 2])).toEqual([2, 2, 2]);
  });

  test("duplicates are kept", () => {
    expect(selectionSort([3, 1, 3, 2, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test("negatives and zero", () => {
    expect(selectionSort([0, -3, 5, -1])).toEqual([-3, -1, 0, 5]);
  });

  test("numeric, not lexicographic", () => {
    expect(selectionSort([10, 9, 100, 1])).toEqual([1, 9, 10, 100]);
  });
});

describe("purity", () => {
  test("does not mutate the input", () => {
    const input = [3, 1, 2];
    selectionSort(input);
    expect(input).toEqual([3, 1, 2]);
  });

  test("returns a new array", () => {
    const input = [1, 2, 3];
    expect(selectionSort(input)).not.toBe(input);
  });
});

describe("property: matches built-in sort", () => {
  test("200 random arrays", () => {
    for (let n = 0; n < 200; n++) {
      const arr = Array.from(
        { length: Math.floor(Math.random() * 30) },
        () => Math.floor(Math.random() * 41) - 20,
      );
      expect(selectionSort(arr)).toEqual([...arr].sort((a, b) => a - b));
    }
  });
});
