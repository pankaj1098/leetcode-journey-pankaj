// LeetCode #17 - Letter Combinations of a Phone Number

const phoneMap = {
  2: "abc", 3: "def", 4: "ghi", 5: "jkl",
  6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz",
};

// Approach 1: Backtracking (Recursion)
// Concept: At each step, pick one letter for the current digit and recurse
//          for the next digit. When the current combination length equals
//          digits length, we have a complete combination — add it to result.
//          This explores all branches of the decision tree.
// Time Complexity:  O(4^n * n) — 4^n combinations (max 4 letters per digit),
//                               each takes O(n) to build the string
// Space Complexity: O(n)       — recursion call stack depth = n (digits length)
function letterCombinations(digits) {
  if (!digits.length) return [];
  let result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }
    for (let letter of phoneMap[digits[index]]) {
      backtrack(index + 1, current + letter);
    }
  }

  backtrack(0, "");
  return result;
}

console.log(letterCombinations("23"));  // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("2"));   // ["a","b","c"]

// Approach 2: Iterative (BFS / Queue)
// Concept: Start with an empty string in the queue. For each digit, take every
//          existing combination in the queue and append each letter of that digit
//          to it. Replace the queue with these expanded combinations.
//          Like building combinations level by level (one digit at a time).
// Time Complexity:  O(4^n * n) — same number of combinations as backtracking
// Space Complexity: O(4^n * n) — queue holds all combinations at each level
function letterCombinationsIterative(digits) {
  if (!digits.length) return [];
  let queue = [""];

  for (let digit of digits) {
    let next = [];
    for (let combo of queue) {
      for (let letter of phoneMap[digit]) {
        next.push(combo + letter);
      }
    }
    queue = next;
  }

  return queue;
}

console.log(letterCombinationsIterative("23"));  // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinationsIterative("2"));   // ["a","b","c"]
