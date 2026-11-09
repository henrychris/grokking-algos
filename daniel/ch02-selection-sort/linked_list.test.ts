import { describe, expect, test } from "bun:test";
import { LinkedList } from "./linked_list";

// Run with: bun test

function make(...values: number[]) {
  const list = new LinkedList<number>();
  for (const v of values) list.append(v);
  return list;
}

describe("empty list", () => {
  test("starts empty", () => {
    const list = new LinkedList<number>();
    expect(list.size).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.toArray()).toEqual([]);
  });

  test("get returns undefined", () => {
    expect(new LinkedList<number>().get(0)).toBeUndefined();
  });

  test("removeAt returns undefined", () => {
    const list = new LinkedList<number>();
    expect(list.removeAt(0)).toBeUndefined();
    expect(list.size).toBe(0);
  });

  test("indexOf returns -1", () => {
    expect(new LinkedList<number>().indexOf(1)).toBe(-1);
  });
});

describe("append / prepend", () => {
  test("append keeps insertion order", () => {
    expect(make(1, 2, 3).toArray()).toEqual([1, 2, 3]);
  });

  test("prepend puts value first", () => {
    const list = make(2, 3);
    list.prepend(1);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test("prepend on empty list", () => {
    const list = new LinkedList<number>();
    list.prepend(1);
    expect(list.toArray()).toEqual([1]);
    expect(list.size).toBe(1);
  });

  test("append after prepend on empty list keeps tail correct", () => {
    const list = new LinkedList<number>();
    list.prepend(1);
    list.append(2);
    expect(list.toArray()).toEqual([1, 2]);
  });

  test("size tracks additions", () => {
    const list = make(1, 2);
    list.prepend(0);
    expect(list.size).toBe(3);
    expect(list.isEmpty()).toBe(false);
  });
});

describe("get", () => {
  test("first, middle, last", () => {
    const list = make(10, 20, 30);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.get(2)).toBe(30);
  });

  test("out of range is undefined", () => {
    const list = make(10, 20, 30);
    expect(list.get(-1)).toBeUndefined();
    expect(list.get(3)).toBeUndefined();
  });
});

describe("insertAt", () => {
  test("at 0 behaves like prepend", () => {
    const list = make(2, 3);
    list.insertAt(0, 1);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test("at size behaves like append", () => {
    const list = make(1, 2);
    list.insertAt(2, 3);
    expect(list.toArray()).toEqual([1, 2, 3]);
    list.append(4);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  test("in the middle", () => {
    const list = make(1, 3);
    list.insertAt(1, 2);
    expect(list.toArray()).toEqual([1, 2, 3]);
    expect(list.size).toBe(3);
  });

  test("into empty list at 0", () => {
    const list = new LinkedList<number>();
    list.insertAt(0, 1);
    expect(list.toArray()).toEqual([1]);
  });

  test("throws RangeError when out of range", () => {
    const list = make(1);
    expect(() => list.insertAt(-1, 0)).toThrow(RangeError);
    expect(() => list.insertAt(2, 0)).toThrow(RangeError);
    expect(list.toArray()).toEqual([1]);
  });
});

describe("removeAt", () => {
  test("removes head", () => {
    const list = make(1, 2, 3);
    expect(list.removeAt(0)).toBe(1);
    expect(list.toArray()).toEqual([2, 3]);
  });

  test("removes middle", () => {
    const list = make(1, 2, 3);
    expect(list.removeAt(1)).toBe(2);
    expect(list.toArray()).toEqual([1, 3]);
    expect(list.size).toBe(2);
  });

  test("removes tail, and append still works after", () => {
    const list = make(1, 2, 3);
    expect(list.removeAt(2)).toBe(3);
    list.append(4);
    expect(list.toArray()).toEqual([1, 2, 4]);
  });

  test("removing the only element leaves a usable empty list", () => {
    const list = make(1);
    expect(list.removeAt(0)).toBe(1);
    expect(list.isEmpty()).toBe(true);
    list.append(2);
    expect(list.toArray()).toEqual([2]);
  });

  test("out of range is undefined and changes nothing", () => {
    const list = make(1, 2);
    expect(list.removeAt(-1)).toBeUndefined();
    expect(list.removeAt(2)).toBeUndefined();
    expect(list.toArray()).toEqual([1, 2]);
  });
});

describe("indexOf", () => {
  test("finds first occurrence", () => {
    expect(make(5, 6, 5).indexOf(5)).toBe(0);
    expect(make(5, 6, 7).indexOf(7)).toBe(2);
  });

  test("missing value is -1", () => {
    expect(make(1, 2).indexOf(9)).toBe(-1);
  });
});

describe("generic", () => {
  test("works with strings", () => {
    const list = new LinkedList<string>();
    list.append("a");
    list.prepend("b");
    expect(list.toArray()).toEqual(["b", "a"]);
  });
});

// Stretch goals: switch to `describe` once reverse/iterator exist.
describe("reverse", () => {
  test("reverses in place", () => {
    const list = make(1, 2, 3);
    list.reverse();
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test("tail is correct after reverse", () => {
    const list = make(1, 2, 3) as any;
    list.reverse();
    list.append(0);
    expect(list.toArray()).toEqual([3, 2, 1, 0]);
  });
});

describe("iterator", () => {
  test("spreads into an array", () => {
    expect([...(make(1, 2, 3) as any)]).toEqual([1, 2, 3]);
  });
});
