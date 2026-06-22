// includes method -> Checks whether an array contains the specific element
// it returns true if the element is exists, false if the element does not exists.
let students = ["ram", "sita","venkat"];
// Check if venkat exists
let result = students.includes("venkat");
console.log(result);
// true


// Product Lists
let products = ["mobile", "laptop", "watch"];
let result1 = products.includes("shoes");
console.log(result1);
// false


let roles = ["admin", "editor", "user"];
let result2 = roles.includes('admin');
console.log(result2);
// true


// concat method -> Combines two or more array into a new array
let classA  =["ram", "sita"];
let classB = ["venkat", "ravi"];
let allStudents = classA.concat(classB);
console.log(allStudents);
// [ 'ram', 'sita', 'venkat', 'ravi' ]


// find method -> returns the first element that satisfies the condition
let numbers = [11, 15, 20, 25];
let result3 = numbers.find((num) => {
    return num % 2 === 0;
});
console.log(result3);
// 20


// findIndex method -> returns the index position of the first matchibng element
let numbers1 = [9, 11, 15, 20, 25, 6];
let result4 = numbers1.findIndex((num) => {
    return num % 2 === 0;
});
console.log(result4);
// 3


// findLast() -> returns the last element that satisfy the condition
let numbers2 = [9, 11, 15, 20, 25, 6]
let result5 = numbers2.findLast((num) => {
    return num % 2 === 0;
});
console.log(result5);
// 6


// findLastIndex method -> returns the index position of the last matching element
let numbers3 = [9, 11, 15, 20, 25, 6];
let result6 = numbers3.findLastIndex((num) => {
    return num % 2 === 0;
});
console.log(result6);
// 5

