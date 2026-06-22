// reduce method -> used to reduce all the array elements into a single value
// sum, average, object, array, count, max value, min value, group data
// Array.reduce(function(accumulator, currentValue){

// }, initialValue);

// sccumulator: stores the previous result
// currentValue: current array element
// initialValue: starting value

// Find the Sum of Numbers
let numbers = [10, 20, 30, 40, 50];
let result = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 5);
console.log(result);
// 155

// 1) 5 + 10 = 15
// 2) 15 + 20 = 35
// 3) 35 + 30 = 65
// 4) 65 + 40 = 105
// 5) 105 + 50 = 155


// map method -> used to create a new array by transforming every element in an existing array
let nums = [1, 2, 3, 4];
// double the numbers
let doubled = nums.map((num) => {
    return num * 2;
});
console.log(nums);
// [ 1, 2, 3, 4 ]
console.log(doubled);
// [ 2, 4, 6, 8 ]