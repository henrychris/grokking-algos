// Build order (tests follow it):
// append, prepend, toArray (early: most tests use it), size, isEmpty,
// get, insertAt, removeAt, indexOf. Stretch: reverse, [Symbol.iterator].
//
// Write the Big O of each method in a comment BEFORE implementing it.
// Tip: track head and tail.

class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

export class LinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  #length = 0;

  constructor() {}

  append(value: T): void {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else if (this.tail) {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
    }
    this.#length++;
  }

  prepend(value: T): void {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else this.head = new Node(value, this.head);

    this.#length++;
  }

  toArray(): T[] {
    let node = this.head;
    let arr = [];

    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }

  get size(): number {
    return this.#length;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  /** undefined if index is out of range */
  get(index: number): T | undefined {
    if (this.isEmpty() || index > this.#length - 1 || index < 0)
      return undefined;

    if (index === 0) return this.head?.value;
    if (index === this.#length - 1) return this.tail?.value;

    let current: null | Node<T> = this.head;

    for (let i = 1; i < this.#length && i <= index; i++) {
      if (current) current = current.next;
    }
    return current?.value;
  }

  /** index in 0..size inclusive; RangeError otherwise */
  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.#length) throw new RangeError("out of range");

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.#length) {
      this.append(value);
      return;
    }

    let current: null | Node<T> = this.head;
    for (let i = 1; i < this.#length && i < index; i++) {
      if (current) current = current.next;
    }

    if (current?.next) {
      current.next = new Node(value, current.next);
      this.#length++;
    }
  }

  /** returns removed value, or undefined if index is out of range */
  removeAt(index: number): T | undefined {
    if (this.isEmpty() || index > this.#length - 1 || index < 0)
      return undefined;

    let current: null | Node<T> = this.head;

    if (index === 0) {
      if (current) {
        this.head = current?.next;
        current.next = null;

        this.#length--;
        return current?.value;
      }
    }

    for (let i = 1; i < this.#length && i < index; i++) {
      if (current) current = current.next;
    }

    if (current?.next) {
      const remove = current.next;
      current.next = remove.next;
      remove.next = null;

      if (remove === this.tail) this.tail = current;

      this.#length--;
      return remove.value;
    }
  }

  /** first index of value, or -1 */
  indexOf(value: T): number {
    let current: null | Node<T> = this.head;

    for (let i = 0; i < this.#length; i++) {
      if (current && current.value !== value) current = current.next;
      else return i;
    }

    return -1;
  }

  // Stretch
  reverse(): void {
    let current: null | Node<T> = this.head;

    if (current) {
      let next: null | Node<T> = null,
        prev: null | Node<T> = null;

      this.tail = current;

      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }

      this.head = prev;
    }
  }

  [Symbol.iterator](): Iterator<T> {
    let current = this.head;

    return {
      next: () => {
        if (!current) return { value: undefined, done: true };

        const value = current.value;
        current = current.next;

        return { value, done: false };
      },
    };
  }
}
