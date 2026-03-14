// LeetCode #509 - Fibonacci Number

// Approach 1: Iterative (Bottom-Up DP)
// Concept: Instead of recomputing subproblems, keep track of just the last two
//          Fibonacci values and roll them forward. F(n) = F(n-1) + F(n-2).
// Time Complexity:  O(n) — single loop from 2 to n
// Space Complexity: O(1) — only two variables used
function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let x = 0;
  let y = 1;

  let fab = 0;

  for (let i = 2; i <= n; i++) {
    fab = x + y;
    x = y;
    y = fab;
  }
  return fab;
}

console.log(fibonacci(6));

// Approach 2: Recursive (Naive)
// Concept: Directly apply the definition F(n) = F(n-1) + F(n-2) with base cases
//          F(0) = 0, F(1) = 1. Simple but recomputes the same subproblems many times.
// Example:  fibonacci1(4) calls fibonacci1(3) and fibonacci1(2), and fibonacci1(3)
//           also calls fibonacci1(2) — redundant work grows exponentially.
// Time Complexity:  O(2^n) — each call branches into two recursive calls
// Space Complexity: O(n)   — call stack depth up to n
function fibonacci1(n) {
  if (n <= 1) return n;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

console.log(fibonacci1(6));

// Approach 3: Memoization (Top-Down DP)
// Concept: Recursive like Approach 2, but store already-computed results in a map.
//          Before computing F(n), check if it's cached. This eliminates redundant
//          branching — each value is computed exactly once.
// Time Complexity:  O(n) — each subproblem solved once
// Space Complexity: O(n) — memo map + call stack depth
function fibonacci2(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibonacci2(n - 1, memo) + fibonacci2(n - 2, memo);
  return memo[n];
}

console.log(fibonacci2(6));

// Approach 4: Matrix Exponentiation
// Concept: Uses the identity:
//          | 1 1 |^n   =   | F(n+1)  F(n)  |
//          | 1 0 |         | F(n)    F(n-1) |
//          By applying fast matrix exponentiation (squaring), we halve the problem
//          each step, achieving O(log n) time. Best for very large n.
// Time Complexity:  O(log n) — matrix squaring halves exponent each step
// Space Complexity: O(1)     — fixed size 2x2 matrix, no recursion
function fibonacci3(n) {
  if (n <= 1) return n;

  function matMul(A, B) {
    return [
      [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
      [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]],
    ];
  }

  function matPow(M, p) {
    if (p === 1) return M;
    if (p % 2 === 0) {
      const half = matPow(M, p / 2);
      return matMul(half, half);
    }
    return matMul(M, matPow(M, p - 1));
  }

  const M = [[1, 1], [1, 0]];
  const result = matPow(M, n);
  return result[0][1];
}

console.log(fibonacci3(6));

// Approach 5: Binet's Formula (Math / Closed Form)
// Concept: F(n) = round(φ^n / √5), where φ = (1 + √5) / 2 (golden ratio ≈ 1.618).
//          Derived from solving the Fibonacci recurrence as a linear equation.
//          O(1) in theory, but floating-point precision breaks down for large n (n > ~70).
// Time Complexity:  O(1) — single formula evaluation
// Space Complexity: O(1) — no extra memory
function fibonacci4(n) {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}

console.log(fibonacci4(6));
