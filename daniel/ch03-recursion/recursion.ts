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

export function sum(arr: number[] = []): number {
  const arrCopy = [...arr];
  while (arrCopy.length > 0) return arrCopy[0] + sum(arrCopy.slice(1));
  return 0;
}

export function countdown(n: number): number[] {
  while (n > 0) return [n, ...countdown(n - 1)];
  return [0];
}
