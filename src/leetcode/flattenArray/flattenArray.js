/* Varioue ways the solve flatten the array
 *flattenArray(item) recursively flattens the nested array and returns a new array. concat() then merges that array with the current result array to maintain a single-level flattened array.
 */

// Using Built-in Method (flat()) – Easiest
const arr = [1, [2, 3], [4, [5, 6]]];

const result = arr.flat(Infinity);

console.log(result);

// Recursive Approach (Most Asked in Interviews)

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

// 3. Using reduce()

function flattenArray1(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    }
    return acc.concat(curr);
  }, []);
}

console.log(flattenArray1([1, [2, 3], [4, [5, 6]]]));

// Using Stack (Iterative DSA Approach)

function flattenArray2(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const value = stack.pop();

    if (Array.isArray(value)) {
      stack.push(...value);
    } else {
      result.unshift(value);
    }
  }

  return result;
}

console.log(flattenArray2([1, [2, 3], [4, [5, 6]]]));

// 5. Flatten With Depth (LeetCode Style)

function flatten(arr, depth) {
  if (depth === 0) return arr;

  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten([1, [2, 3], [4, [5, 6]]]));
