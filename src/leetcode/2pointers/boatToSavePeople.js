// LeetCode 881 - Boats to Save People
// Each boat carries at most 2 people with a combined weight <= limit.
// Return the minimum number of boats to carry every person.

// Sort + Two Pointers: O(n log n) time, O(1) space
function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    // Pair the lightest and heaviest person if they fit together
    if (people[left] + people[right] <= limit) {
      left++; // lightest person fits, take them along
    }
    right--; // heaviest always takes a boat
    boats++;
  }

  return boats;
}

// Examples
console.log(numRescueBoats([1, 2], 3));         // 1
console.log(numRescueBoats([3, 2, 2, 1], 3));   // 3
console.log(numRescueBoats([3, 5, 3, 4], 5));   // 4
