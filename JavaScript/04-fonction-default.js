function sum(a, b = 0) {
  return a + b;
}

console.log(sum(1)); // sum(1, undefined) => NaN
