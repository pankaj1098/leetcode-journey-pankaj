/**
 * Problem: Pascals triangle-ii
 * Difficulty: Easy
 *

 * Approach:
 * - We iterate from 0 to numRows - 1 to build each row of Pascal’s Triangle.
 * - For every row, we initialize an array of size (i + 1) filled with 1s.
 * - The first and last elements remain 1 by default.
 * - For middle elements, we use the previous row:
 *   row[j] = result[i - 1][j - 1] + result[i - 1][j].
 * - After constructing each row, we push it into the result array.
 *
 * Key Learning:
 * - Each element (except first and last) is the sum of two elements above it.
 * - First and last elements of every row are always 1.
 * - We use previously computed rows (dynamic programming approach).
 * - Time Complexity: O(n²).
 * - Space Complexity: O(n²).
 * - This is a classic example of building results incrementally using prior computation.
 * 
 * Interview
 * We build Pascal’s Triangle row by row.
 * For each row, the first and last elements are always 1.
 * For the middle elements, we use the previous row where each value is the sum of the two numbers directly above it.
 * We store each row in a result array and return it after generating all rows.
 */

var getRow = function (rowIndex) {
  let triangle = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    let row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle[rowIndex];
};

console.log(getRow(3));

// var getRow = function(rowIndex) {
//     let row = new Array(rowIndex + 1).fill(0)
//     row[0] = 1

//     for (let i = 1; i <= rowIndex; i++) {
//         for (let j = i; j > 0; j--) {
//             row[j] = row[j] + row[j - 1]
//         }
//     }

//     return row
// };

// console.log(getRow(3))
