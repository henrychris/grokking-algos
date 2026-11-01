function binarySearch(value: number, arr: number[]): number | null {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess < value) {
      low = mid + 1;
    } else if (guess > value) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return null;
}

console.log(binarySearch(20, [1, 3, 4, 7, 9, 12]));
