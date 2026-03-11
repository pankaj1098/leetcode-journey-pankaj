// LeetCode 125 - Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters to lowercase
// and removing all non-alphanumeric characters, it reads the same forward and backward.

// Two Pointers approach: O(n) time, O(1) space
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters
    while (left < right && !isAlphanumeric(s[left])) left++;
    while (left < right && !isAlphanumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(c) {
  return /[a-zA-Z0-9]/.test(c);
}

// Examples
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false
console.log(isPalindrome(" "));                              // true
