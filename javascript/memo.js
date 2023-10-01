//This would be the standard fibonnaci method. It is not very efficient because it is not using memoization.
// Memoization is a technique that attempts to increase a function's performance by caching its previously computed results.
// Apart from the first two results, the ones for n=0 and n=1, all other results have to be computed always, even if they already where in that same execution.
const standardFibonnaci = (n) => {
  const memo = [0, 1];

  console.log("Start n: ", n);
  console.log("memo: ", memo);

  if (memo[n] === undefined) {
    return standardFibonnaci(n - 1) + standardFibonnaci(n - 2);
  }

  console.log("Exit n: ", n);
  console.log("memo: ", memo);

  return memo[n];
};

// This is the same fibonnaci method but using memoization.
// The memoization is done by storing the results in an array.
// Thanks to Javascript's closures, the array is accessible from the inner function.
const memoizedFibonnaci = (n) => {
  let memo = [0, 1];

  const memoization = (n) => {
    console.log("Start n: ", n);
    console.log("memo: ", memo);

    if (memo[n] === undefined) {
      memo[n] = memoization(n - 1) + memoization(n - 2);
    }

    console.log("Exit n: ", n);
    console.log("memo: ", memo);

    return memo[n];
  };

  return memoization(n);
};

const n = process.argv[2] || 3;
console.log(standardFibonnaci(n));
