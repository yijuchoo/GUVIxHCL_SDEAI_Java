// Rest operator (...) -> collects multiple values and put them into a single array

function add(a, b, c) {
  return a + b + c;
}
console.log(add(10, 20, 30));
// 60
console.log(add(10, 20, 30, 40, 50)); // behind values are ignored bcos only uses the first 3
// 60
console.log(add(10, 20, 30, 40, 50, 60, 90, 100)); // behind values are ignored bcos only uses the first 3
// 60

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
console.log(sum(10, 20)); // 30
console.log(sum(10, 20, 30, 40, 50)); // 150
console.log(sum(10, 20, 50, 60, 80, 100, 200, 500, 600)); // 1620


