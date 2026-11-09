// Contract: selectionSort(arr) -> NEW array, sorted ascending. Input is not mutated.
// Before writing: what is the Big O? Which built-ins hide a loop? O(n^2). Array.prototype.splice() hides a loop

export function selectionSort(arr: number[]): number[] {
  const arrCopy = [...arr];
  const sorted: Array<number> = [];

  while (arrCopy.length > 0) {
    let minIndex = 0;
    for (let i = 1; i < arrCopy.length; i++) {
      if (arrCopy[i] < arrCopy[minIndex]) minIndex = i;
    }
    sorted.push(arrCopy[minIndex]);
    arrCopy.splice(minIndex, 1);
  }

  return sorted;
}

// sort in-place
export function selectionSortV2(arr: number[]): number[] {
  const arrCopy = [...arr];

  for (let i = 0; i < arrCopy.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrCopy.length; j++) {
      if (arrCopy[j] < arrCopy[minIndex]) minIndex = j;
    }

    [arrCopy[i], arrCopy[minIndex]] = [arrCopy[minIndex], arrCopy[i]];
  }

  return arrCopy;
}
