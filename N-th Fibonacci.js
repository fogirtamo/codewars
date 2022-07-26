// 6 kyu
function nthFibo(n) {
    function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  return fib(n - 1);
}