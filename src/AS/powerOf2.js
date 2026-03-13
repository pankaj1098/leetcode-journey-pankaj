// LeetCode #231 - Power of Two

// Approach 1: Recursive Division
// Concept: A number is a power of two if it can be repeatedly divided by 2
//          until we reach 1. If at any point it's not divisible by 2 (and not 1),
//          it's not a power of two. Base cases: n=1 → true, n<1 or odd → false.
// Time Complexity:  O(log n) — divides by 2 each call
// Space Complexity: O(log n) — call stack depth is log n
function isPowerOfTwo(n) {
  if (n == 1) return true;
  if (n < 1 || n % 2 != 0) return false;
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(18));

// Approach 2: Bit Manipulation (optimal)
// Concept: Powers of two in binary have exactly one bit set (e.g. 4 = 100, 8 = 1000).
//          n - 1 flips that bit and sets all lower bits (e.g. 8-1 = 0111).
//          So n & (n-1) === 0 is true only for powers of two.
//          Also guard n > 0 to exclude zero and negatives.
// Example:  16 = 10000, 15 = 01111 → 16 & 15 = 0 ✓
// Time Complexity:  O(1) — single bitwise operation
// Space Complexity: O(1) — no extra memory
function isPowerOftwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOftwo(16));
console.log(isPowerOftwo(18));
