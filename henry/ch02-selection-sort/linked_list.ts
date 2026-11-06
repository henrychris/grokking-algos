// The methods to write, in a sensible build order:

// append(value): add to the end
// prepend(value): add to the front
// toArray(): write this early, because almost every test uses it
// size (a getter) and isEmpty()
// get(index): returns undefined if the index is out of range
// insertAt(index, value): index can be anything from 0 to size; throw a RangeError otherwise
// removeAt(index): returns the removed value, or undefined if the index is out of range
// indexOf(value): returns -1 if the value isn’t there
// isEmpty(): is this value
// Stretch goals: reverse() and [Symbol.iterator]. Those tests are under describe.skip until you switch them on.

// Tips
// 1. Track `head` and `tail`
// 2. Write the big O of each method before writing it.

// Node: (next, payload);

class LLNode<T> {
  payload: T;
  next: LLNode<T> | null;

  constructor(payload: T) {
    this.payload = payload;
    this.next = null;
  }
}

export class LinkedList<T> {
  length = 0;
  head: LLNode<T> | null;
  tail: LLNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(payload: T) {
    const node = new LLNode(payload);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;
  }

  prepend(payload: T) {
    const node = new LLNode(payload);
    node.next = this.head;
    this.head = node;

    if (!this.tail) this.tail = node;
    this.length++;
  }

  toArray(): T[] {
    const arr: T[] = [];
    let node = this.head;

    while (node) {
      arr.push(node.payload);
      node = node.next;
    }

    return arr;
  }

  get size() {
    return this.length;
  }

  get(index: number): T | undefined {
    // optimisation so we dont need to walk the list
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.tail!.payload;

    let i = 0;
    let node = this.head;

    while (node) {
      if (i === index) return node.payload;

      node = node.next;
      i++;
    }

    return undefined;
  }

  insertAt(index: number, value: T) {
    if (index < 0 || index >= this.length)
      throw new RangeError("index out of range");
    
    let node = new LLNode(value);
    
    if (index === this.length - 1) {
      node.next = this.tail;
      this.length++;
      return;
    }

    while (node) {
      if(i === index) 
    }
  }

  /**
   * returns the removed value, or undefined if the index is out of range
   * @param index The index of the value to remove
   */
  removeAt(index: number): T | undefined {}

  /**
   * Return the index where a value first appears in the list. Returns -1 if the value isn’t in the list.
   * @param payload
   */
  indexOf(payload: T): number {
    let index = 0;
    let node = this.head;

    while (node) {
      if (node.payload === payload) return index;

      node = node.next;
      index++;
    }

    return -1;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  reverse(): LinkedList<T> {}
}
