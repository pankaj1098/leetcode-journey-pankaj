/**
 * Problem: Add Binary
 * Difficulty: Easy
 *
 * Approach:
 * - We use two pointers starting from the end of both binary strings.
 * - At each step, we add corresponding digits along with carry.
 * - e compute current bit using sum % 2 and update carry using Math.floor(sum / 2) until all digits and carry are processed.
 *

 * Key Learning:
 * - Binary addition works exactly like decimal addition with carry.
 * - Always traverse from right to left.
 * - Use sum % 2 to compute the current bit.
 * - Use Math.floor(sum / 2) to update the carry.
 * - Ensure the loop condition includes carry.
 * - Time Complexity: O(n).
 * - Space Complexity: O(n).
 * - Avoid converting to decimal for large inputs to prevent overflow.
 */

function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;

    if (i >= 0) sum += Number(a[i--]);
    if (j >= 0) sum += Number(b[j--]);

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
}

//Method 2 (Shortcut – Not Preferred in Interviews)

// function addBinary(a, b) {
//   return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
// }

console.log(addBinary('1010', '1011'));
