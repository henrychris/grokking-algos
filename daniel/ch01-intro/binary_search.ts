export function binarySearch(value: number, arr: number[]): number | null {
  let hi = arr.length - 1,
    lo = 0;

  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const guess = arr[mid];

    if (value === guess) return mid;
    else if (value < guess) {
      hi = mid - 1;
    } else if (value > guess) {
      lo = mid + 1;
    }
  }
  return null;
}

console.log(binarySearch(19, [1, 3, 5, 7, 9]));
