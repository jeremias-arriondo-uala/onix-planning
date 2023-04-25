export function fibonacciArray(limit: number): { value: number }[] {
  const fib: { value: number }[] = [];
  let a = 0,
    b = 1;
  while (b <= limit) {
    fib.push({ value: b });
    [a, b] = [b, a + b];
  }
  if (fib.length > 0) {
    fib[0].value = 0;
  }
  return fib;
}
