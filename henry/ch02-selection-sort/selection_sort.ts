function selectionSort(arr: number[]) {
  const sorted: number[] = [];
  const remaining = [...arr];

  // easy way to check complexity: how many loops go over the elements?
  // consider built in loops, like splice, indexOf, filter & Math.max()
  while (remaining.length > 0) {
    let max = remaining[0];
    let maxIndex = 0;

    for (const [index, num] of remaining.entries()) {
      if (num > max) {
        max = num;
        maxIndex = index;
      }
    }

    remaining.splice(maxIndex, 1);
    sorted.push(max);
  }

  return sorted;
}

const randomIntegers: number[] = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1,
);

console.log(selectionSort(randomIntegers));
