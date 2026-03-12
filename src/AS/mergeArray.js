// LeetCode #88 - Merge Sorted Array
// Approach 1: Two Pointers from End (In-place, optimal)
// Concept: Since num1 has extra space at the end, we fill from the back by comparing
//          the largest elements of both arrays. This avoids overwriting num1's valid elements.
// Time Complexity:  O(m + n) — each element is placed exactly once
// Space Complexity: O(1)     — no extra space used, merge done in-place
function mergeArray(num1, m, num2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (p1 >= 0 && num1[p1] > num2[p2]) {
      num1[i] = num1[p1];
      p1--;
    } else {
      num1[i] = num2[p2];
      p2--;
    }
  }
  return num1;
}

console.log(mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// Approach 2: Two Pointers from Start with Copy
// Concept: Copy num1's valid elements to a temp array first, then use two pointers
//          starting from the front to merge both into num1. Safe because we don't
//          overwrite the original num1 values (they're already copied).
// Time Complexity:  O(m + n) — single pass to merge after O(m) copy
// Space Complexity: O(m)     — extra array of size m to hold num1 copy
function mergeArray2(num1, m, num2, n) {
  let p1 = 0;
  let p2 = 0;
  let num1Copy = num1.slice(0, m);

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && num1Copy[p1] < num2[p2])) {
      num1[i] = num1Copy[p1];
      p1++;
    } else {
      num1[i] = num2[p2];
      p2++;
    }
  }
  return num1;
}

console.log(mergeArray2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// Approach 3: Two Pointers from End (while-loop variant, cleaner)
// Concept: Same idea as Approach 1 — fill num1 from the back. Uses two separate
//          while loops: first handles the comparison phase, then a cleanup loop
//          copies remaining num2 elements if any are left. If num1 elements remain,
//          they're already in place so no cleanup needed.
// Time Complexity:  O(m + n) — each element visited once
// Space Complexity: O(1)     — fully in-place, no extra memory
function mergeArray3(num1, m, num2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (num1[i] > num2[j]) {
      num1[k--] = num1[i--];
    } else {
      num1[k--] = num2[j--];
    }
  }
  while (j >= 0) {
    num1[k--] = num2[j--];
  }
  return num1;
}

console.log(mergeArray3([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
