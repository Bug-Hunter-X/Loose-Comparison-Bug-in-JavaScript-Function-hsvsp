# Loose Comparison Bug in JavaScript Function

This repository demonstrates a common bug in JavaScript related to loose comparison (==) in conditional statements. The code contains a function that intends to handle null and undefined values differently, but due to loose comparison it produces unexpected results.

## Bug Description
The `foo` function uses `==` to compare `x` with `null`. While this works for null values, the function behaves unexpectedly for `undefined` as it incorrectly evaluates to false, leading to the returned value being NaN. 

## Solution
The solution involves using strict equality (`===`) to accurately check for null and undefined separately, resolving the unexpected behavior for undefined.  

## How to reproduce
1. Clone this repository.
2. Open `bug.js` to see the code with the bug.
3. Open `bugSolution.js` to view the corrected version using strict equality.
4. Run both files and observe the output differences.