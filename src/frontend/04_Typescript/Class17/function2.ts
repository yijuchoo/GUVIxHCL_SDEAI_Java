// function expression -> store a function inside a variable

// Example 1
const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply(5, 4));
// 20

// Example 2
// arrow functions -> shortened syntax for the functions
const divide = (a: number, b: number) => {
  return a / b;
};
console.log(divide(20, 4));
// 5

// Example 3
// arrow function for the square
const square = (num: number): number => num * num;
console.log(square(6));
// 36

// Example 4
// function type -> we can define the type of the function
let calculate: (x: number, y: number) => number;
calculate = function (x, y) {
  return x + y;
};
console.log(calculate(10, 5));
// 15

// Example 5
// function with object parameter
function displayUser(user: { name: string; city: string }): void {
  console.log(`Name: ${user.name}`);
  console.log(`City is: ${user.city}`);
}

displayUser({
  name: "venkat",
  city: "bangalore",
});
// Output:
// Name: venkat
// City is: bangalore

// Example 6
// function with array parameter
function printNumbers(numbers: number[]): void {
  for (let num of numbers) {
    console.log(num);
  }
}
printNumbers([10, 2, 4, 10, 60]);
/* 
Output:
10
2
4
10
60
 */

// Example 7
// callback function
function processData(callback: () => void): void {
  console.log("Processing data");
  callback();
}
processData(function () {
  console.log("Data processed successfully");
});
// Processing data
// Data processed successfully