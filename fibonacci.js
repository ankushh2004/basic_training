// Exercise 1: Memoized Fibonacci
function Fibonacci() {
  const result = {};
  function calculateFibonacci(n) {
    if (n == 0 || n == 1) return n;

    if (result[n]) return result[n];

    result[n] = calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    return result[n];
  }
  return calculateFibonacci;
}

const fib = Fibonacci();
console.log(fib(4));

