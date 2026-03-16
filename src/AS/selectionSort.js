// Selection Sort

// Approach 1: Basic Selection Sort
// Concept: Divide the array into sorted (left) and unsorted (right) portions.
//          In each pass, find the minimum element from the unsorted portion
//          and swap it with the first unsorted element. Grows sorted portion by 1 each pass.
// Time Complexity:  O(n²) — always, even if already sorted (no early exit)
// Space Complexity: O(1)  — in-place sorting
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11])); // [11,12,22,25,64]

// Approach 2: Double Selection Sort (Min + Max per pass)
// Concept: In each pass, find both the minimum and maximum of the unsorted portion
//          and place them at the correct positions simultaneously.
//          This halves the number of passes needed.
// Time Complexity:  O(n²) — still quadratic but ~half the passes
// Space Complexity: O(1)  — in-place sorting
function selectionSortDouble(arr) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo < hi) {
    let minIdx = lo;
    let maxIdx = lo;

    for (let j = lo + 1; j <= hi; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
      if (arr[j] > arr[maxIdx]) maxIdx = j;
    }

    [arr[lo], arr[minIdx]] = [arr[minIdx], arr[lo]];

    // if maxIdx was at lo, it got swapped to minIdx position
    if (maxIdx === lo) maxIdx = minIdx;

    [arr[hi], arr[maxIdx]] = [arr[maxIdx], arr[hi]];

    lo++;
    hi--;
  }
  return arr;
}

console.log(selectionSortDouble([64, 25, 12, 22, 11])); // [11,12,22,25,64]
