/**
 * Problem: Climbing stairs
 * Difficulty: Easy
 *
 *  * Approach:
 * At step n, you can reach there in only two ways:
 * From n-1 step (take 1 step)
 * From n-2 step (take 2 steps)
 * So the recurrence becomes:
 * f(n)=f(n−1)+f(n−2)
 * This is exactly the Fibonacci pattern.
 *
 * Key Learning:
 * The key learning is recognizing the Dynamic Programming pattern.
 * The number of ways to reach step n depends on n-1 and n-2, which forms a Fibonacci sequence.
 * We optimize the solution from recursion to an O(n) time and O(1) space dynamic programming approach.
 *
 * */

const climbStairs = function (n) {
  if (n <= 2) return n;

  let prev1 = 1;
  let prev2 = 2;

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
    console.log(current);
  }

  return prev2;
};

console.log(climbStairs(5));
