import { describe, expect, test } from "bun:test";
import { LinkedList } from "./linked_list";

// Run with: bun test

describe("empty list", () => {
  test("starts empty", () => {
    const list = new LinkedList<number>();
    expect(list.size).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.toArray()).toEqual([]);
  });

  test("get on empty list returns undefined", () => {
    const list = new LinkedList<number>();
    expect(list.get(0)).toBeUndefined();
  });

  test("removeAt on empty list returns undefined", () => {
    const list = new LinkedList<number>();
    expect(list.removeAt(0)).toBeUndefined();
    expect(list.size).toBe(0);
  });
});

describe("append / prepend", () => {
  test("append adds to the end", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
    expect(list.size).toBe(3);
    expect(list.isEmpty()).toBe(false);
  });

  test("prepend adds to the front", () => {
    const list = new LinkedList<number>();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test("append and prepend mixed", () => {
    const list = new LinkedList<number>();
    list.append(2);
    list.prepend(1);
    list.append(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });
});

describe("get", () => {
  const list = new LinkedList<string>();
  list.append("a");
  list.append("b");
  list.append("c");

  test("reads by index", () => {
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  test("out of range returns undefined", () => {
    expect(list.get(3)).toBeUndefined();
    expect(list.get(-1)).toBeUndefined();
  });
});

describe("insertAt", () => {
  test("insert at 0 is a prepend", () => {
    const list = new LinkedList<number>();
    list.append(2);
    list.insertAt(0, 1);
    expect(list.toArray()).toEqual([1, 2]);
  });

  test("insert in the middle", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(3);
    list.insertAt(1, 2);
    expect(list.toArray()).toEqual([1, 2, 3]);
    expect(list.size).toBe(3);
  });

  test("insert at size is an append", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.insertAt(1, 2);
    list.append(3); // tail must still be correct after insertAt
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test("insert into empty list at 0", () => {
    const list = new LinkedList<number>();
    list.insertAt(0, 1);
    expect(list.toArray()).toEqual([1]);
  });

  test("out of range throws RangeError", () => {
    const list = new LinkedList<number>();
    list.append(1);
    expect(() => list.insertAt(5, 9)).toThrow(RangeError);
    expect(() => list.insertAt(-1, 9)).toThrow(RangeError);
  });
});

describe("removeAt", () => {
  const make = () => {
    const list = new LinkedList<number>();
    [1, 2, 3, 4].forEach((n) => list.append(n));
    return list;
  };

  test("remove head", () => {
    const list = make();
    expect(list.removeAt(0)).toBe(1);
    expect(list.toArray()).toEqual([2, 3, 4]);
    expect(list.size).toBe(3);
  });

  test("remove middle", () => {
    const list = make();
    expect(list.removeAt(2)).toBe(3);
    expect(list.toArray()).toEqual([1, 2, 4]);
  });

  test("remove tail, then append (tail pointer must update)", () => {
    const list = make();
    expect(list.removeAt(3)).toBe(4);
    list.append(5);
    expect(list.toArray()).toEqual([1, 2, 3, 5]);
  });

  test("remove only element, then append (head and tail must reset)", () => {
    const list = new LinkedList<number>();
    list.append(1);
    expect(list.removeAt(0)).toBe(1);
    expect(list.isEmpty()).toBe(true);
    list.append(2);
    expect(list.toArray()).toEqual([2]);
  });

  test("out of range returns undefined and changes nothing", () => {
    const list = make();
    expect(list.removeAt(10)).toBeUndefined();
    expect(list.removeAt(-1)).toBeUndefined();
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });
});

describe("indexOf", () => {
  const list = new LinkedList<string>();
  ["a", "b", "c", "b"].forEach((s) => list.append(s));

  test("finds first match", () => {
    expect(list.indexOf("a")).toBe(0);
    expect(list.indexOf("b")).toBe(1);
  });

  test("missing value returns -1", () => {
    expect(list.indexOf("z")).toBe(-1);
  });
});

// Stretch goals: change describe.skip to describe when you're ready.
describe.skip("stretch", () => {
  test("reverse in place", () => {
    const list = new LinkedList<number>();
    [1, 2, 3].forEach((n) => list.append(n));
    list.reverse();
    expect(list.toArray()).toEqual([3, 2, 1]);
    list.append(0); // tail must be correct after reversing
    expect(list.toArray()).toEqual([3, 2, 1, 0]);
  });

  test("is iterable with for...of", () => {
    const list = new LinkedList<number>();
    [1, 2, 3].forEach((n) => list.append(n));
    expect([...list]).toEqual([1, 2, 3]);
  });
});
