// LeetCode 680 - Valid Palindrome II
// Given a string s, return true if it can be a palindrome
// after deleting at most one character.

// Two Pointers approach: O(n) time, O(1) space
function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try skipping either left or right character
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true;
}

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Examples
console.log(validPalindrome("aba"));   // true
console.log(validPalindrome("abca"));  // true  (delete 'c')
console.log(validPalindrome("abc"));   // false
