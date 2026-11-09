# Chapter 2: Selection Sort

## Core idea

- Memory is a set of addressed slots. Arrays take one contiguous block; linked lists scatter items and chain them with pointers.
- Neither is better outright. The choice depends on whether you read, insert, or delete most.
- Selection sort: repeatedly find the smallest (or largest) remaining item and move it to the sorted side.

## Big O

| Operation | Array | Linked list |
| --------- | ----- | ----------- |
| Read      | O(1)  | O(n)        |
| Insert    | O(n)  | O(1)*       |
| Delete    | O(n)  | O(1)*       |

- \*O(1) only once you already hold the previous node. Finding it is O(n). Head/tail inserts are truly O(1).
- Selection sort: O(n²) time, O(1) extra space if done in place.
- Arrays allow random access (index in O(1)); linked lists allow only sequential access.
- Big O drops constants: n + (n-1) + ... + 1 = n(n+1)/2, still O(n²).

## Confusions

- Selection sort does `n + (n-1) + ... + 1` comparisons. E.g. for a 5 item list, that is 5 + 4 + 3 + 2 + 1 total item comparisons.

## Real-world link

- (fill in where you've seen this)

## TDD log

- Selection sort: tests in `selection_sort.test.ts`; contract is a new sorted array, input not mutated.
- Linked list: tests in `linked_list.test.ts`; build order is in the header of `linked_list.ts`. Tail handling after removeAt/prepend is where bugs hide.
- Workflow: run `bun test`, see red, implement, see green, repeat.
