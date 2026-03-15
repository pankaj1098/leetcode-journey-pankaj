// LeetCode #9 - Palindrome Number

// Approach 1: Convert to String + Two Pointers
// Concept: Convert the number to a string, then use two pointers (left and right)
//          moving inward. If any characters don't match, it's not a palindrome.
//          Negative numbers are never palindromes.
// Time Complexity:  O(d) — d = number of digits
// Space Complexity: O(d) — string conversion takes extra space
var isPalindrome1 = function (x) {
  if (x < 0) return false;
  const s = x.toString();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome1(121)); // true
console.log(isPalindrome1(-121)); // false
console.log(isPalindrome1(10)); // false

// Approach 2: Full Reverse (Mathematical)
// Concept: Reverse the entire number digit by digit using % 10 to extract
//          the last digit and build the reversed number. Compare with original.
//          Negative numbers and numbers ending in 0 (except 0 itself) are not palindromes.
// Time Complexity:  O(d) — one pass through all digits
// Space Complexity: O(1) — no extra space used
var isPalindrome2 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reversed = 0;
  let original = x;
  while (original > 0) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }
  return reversed === x;
};

console.log(isPalindrome2(121)); // true
console.log(isPalindrome2(-121)); // false
console.log(isPalindrome2(10)); // false

// Approach 3: Half Reverse (Optimal — avoids overflow risk)
// Concept: Instead of reversing the full number, only reverse the second half.
//          Stop when the reversed half >= remaining number (we've reached the middle).
//          For even-length: reversed === remaining
//          For odd-length:  reversed / 10 === remaining (discard middle digit)
// Time Complexity:  O(d/2) — only processes half the digits
// Space Complexity: O(1)   — no extra space
var isPalindrome3 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reversedHalf = 0;
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

console.log(isPalindrome3(121)); // true
console.log(isPalindrome3(-121)); // false
console.log(isPalindrome3(10)); // false

// Approach 4: Digit Extraction (Array of digits)
// Concept: Extract all digits into an array using % 10 repeatedly.
//          Then use two pointers on the digits array to check palindrome.
//          More explicit and readable version of the digit-by-digit approach.
// Time Complexity:  O(d) — extract all digits + one pass to compare
// Space Complexity: O(d) — array to store all digits
var isPalindrome4 = function (x) {
  if (x < 0) return false;
  const digits = [];
  if (x === 0) return true;
  while (x > 0) {
    digits.push(x % 10);
    x = Math.floor(x / 10);
  }
  let left = 0;
  let right = digits.length - 1;
  while (left < right) {
    if (digits[left] !== digits[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome4(121)); // true
console.log(isPalindrome4(-121)); // false
console.log(isPalindrome4(10)); // false
