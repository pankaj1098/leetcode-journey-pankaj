// Insertion Sort

// Approach 1: Basic Insertion Sort
// Concept: Build the sorted array one element at a time. For each element,
//          shift all larger elements in the sorted portion one position right,
//          then insert the current element in its correct position.
//          Like sorting playing cards in your hand — pick one card and slide it into place.
// Time Complexity:  O(n²) worst/avg — O(n) best (already sorted, no shifts needed)
// Space Complexity: O(1)  — in-place sorting
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

let arr = [1, 4, 2, 9, -10, 6, 7];
console.log(insertionSort(arr)); // [-10, 1, 2, 4, 6, 7, 9]
