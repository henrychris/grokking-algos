import { describe, expect, test } from "bun:test";
import { binarySearch } from "./binary_search";

// Run with: bun test
// Contract: binarySearch(value, sortedAsc) -> index of value, or null if absent.

describe("empty and single-element arrays", () => {
  test("empty array returns null", () => {
    expect(binarySearch(1, [])).toBeNull();
  });

  test("single element, found", () => {
    expect(binarySearch(5, [5])).toBe(0);
  });

  test("single element, not found", () => {
    expect(binarySearch(3, [5])).toBeNull();
  });
});

describe("finding values", () => {
  const arr = [1, 3, 4, 7, 9, 12];

  test("finds first element", () => {
    expect(binarySearch(1, arr)).toBe(0);
  });

  test("finds last element", () => {
    expect(binarySearch(12, arr)).toBe(5);
  });

  test("finds middle elements", () => {
    expect(binarySearch(4, arr)).toBe(2);
    expect(binarySearch(7, arr)).toBe(3);
  });

  test("finds every element in odd-length array", () => {
    const odd = [2, 4, 6, 8, 10];
    odd.forEach((v, i) => expect(binarySearch(v, odd)).toBe(i));
  });

  test("finds every element in even-length array", () => {
    arr.forEach((v, i) => expect(binarySearch(v, arr)).toBe(i));
  });
});

describe("missing values", () => {
  const arr = [1, 3, 4, 7, 9, 12];

  test("below range", () => {
    expect(binarySearch(0, arr)).toBeNull();
  });

  test("above range", () => {
    expect(binarySearch(20, arr)).toBeNull();
  });

  test("between elements", () => {
    expect(binarySearch(5, arr)).toBeNull();
  });
});

describe("edge cases", () => {
  test("negative numbers", () => {
    const arr = [-10, -3, 0, 4, 8];
    expect(binarySearch(-10, arr)).toBe(0);
    expect(binarySearch(-3, arr)).toBe(1);
    expect(binarySearch(-4, arr)).toBeNull();
  });

  test("zero is a valid index, not falsy 'not found'", () => {
    expect(binarySearch(1, [1, 2, 3])).toBe(0);
  });

  test("duplicates: returns an index that holds the value", () => {
    const arr = [1, 2, 2, 2, 3];
    const i = binarySearch(2, arr);
    expect(i).not.toBeNull();
    expect(arr[i!]).toBe(2);
  });

  test("does not mutate input", () => {
    const arr = [1, 3, 5, 7];
    const copy = [...arr];
    binarySearch(5, arr);
    expect(arr).toEqual(copy);
  });

  test("large array", () => {
    const big = Array.from({ length: 1_000_000 }, (_, i) => i * 2);
    expect(binarySearch(0, big)).toBe(0);
    expect(binarySearch(1_999_998, big)).toBe(999_999);
    expect(binarySearch(777_776, big)).toBe(388_888);
    expect(binarySearch(777_777, big)).toBeNull();
  });
});

describe("efficiency", () => {
  test("uses O(log n) comparisons", () => {
    const n = 1024;
    let reads = 0;
    const base = Array.from({ length: n }, (_, i) => i);
    const arr = new Proxy(base, {
      get(t, p, r) {
        if (typeof p === "string" && /^\d+$/.test(p)) reads++;
        return Reflect.get(t, p, r);
      },
    });
    binarySearch(n - 1, arr);
    expect(reads).toBeLessThanOrEqual(Math.ceil(Math.log2(n)) + 1);
  });
});
