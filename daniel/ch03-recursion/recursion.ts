// Every recursive function needs a base case (stops) and a recursive case (calls itself).
// Contracts are in recursion.test.ts. Run with: bun test

// n! for a non-negative integer. Throw RangeError otherwise.
export function factorial(n: number): number {
  while (n >= 0) {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
  }

  throw new RangeError();
}

// Sum of all numbers in arr. Empty array is 0. Don't mutate arr.
// Clues:
// 1. Base case: what is the sum of an empty array?
// 2. Recursive case: sum(arr) = first item + sum(everything after it).
// 3. Each call must work on a smaller array, or it never reaches the base case.
// 4. To get "everything after the first item" without mutating, try slice(1) or destructuring.
export function sum(arr: number[] = []): number {
  const arrCopy = [...arr];

  if (arrCopy.length === 0) return 0;

  return 0;
}

// [n, n-1, ..., 0]. Anything <= 0 returns [0].
export function countdown(n: number): number[] {
  throw new Error("not implemented");
}
