# Binary Search

- Input is a sorted list of elements.
  - The list must be sorted by the thing you're searching for. A phone book sorted by name can't be binary searched by phone number.
- Each step in the algorithm eliminates half the elements in the search space.
  - If it isn't sorted, we can't ascertain that we eliminate half the search space each step
- In the worst case, binary search will take `log₂ N` steps, where N is the number of elements.
- If N isn't a power of two, no of steps = `log₂ N rounded up`.
  - Or, Find the two powers of two that N falls between and take the higher one.
  - e.g for 1000 items, 2 ^ 9 is 512, which doesn't cover the full set. 2 ^ 10 is 1024, and does cover the full set of items.

## Logarithms

- Logarithms are the inverse of exponents.
- Where `log₂ 16 = 4`, `2 ^ 4 = 16`. The log can be read as log base two of sixteen is 4.
- Take Y as no of steps and N as number of elements.
  - `log₂ N = Y` & `2 ^ Y = N`;

## Big O Notation

- This is used to illustrate the speed of an algorithm as the size of data increases, comparing the number of operations. It considers the **worst-case** scenario.
- Some common notations:
  - O(n): linear time, e.g for linear search
    - the work grows at the same rate as the input
  - O(log n): logarithmic time, e.g binary search
    - the work grows by one step each time the input doubles. Faster than O(n), and a **lot** faster than it as the input grows
  - O(n * log n): e.g, a fast sorting algorithm
  - O(n ^ 2): e.g, a slow sorting algorithm
  - O(n!): factorial time e.g, a **really** slow algorithm, like the travelling salesperson algorithm.
- Constants are dropped: O(n/26) and O(2n) are both just O(n). Big O describes how work grows, not the exact count.

## Travelling Salesperson

- A salesperson wants to visit multiple cities while travelling the least distance.
- To do so, they need to look at all the permutations for trips between cities then choose the trip with the least distance travelled.
- For 3 cities that is 6 options. For 6 cities, 720. For 7 cities, 5040. The number of operations increases drastically each time.
- There's no known fast solution to this, only approximations to get a good enough answer. It's an unsolved problem in computer science.
