// filter method => Creates the new array containing the only elements that satisfy the condition

// Example 1
let numbers = [10, 15, 20, 25, 30];
// Filter only even numbers
let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNumbers);
// Output: [ 10, 20, 30 ]


// Example 2
let users = [
    "active",
    "inactive",
    "active",
    "inactive"
];

let activeUsers = users.filter((user) => {
    return user === "active";
});
console.log(activeUsers);
// Output: [ 'active', 'active' ]


// Example 3
let prices = [500, 1500, 300, 2500];
let expensiveProducts = prices.filter((price) => {
    return price > 1500;
});
console.log(expensiveProducts);
// Output: [ 2500 ]


// every method -> checks all the elements satisfy the condition
// it returns true -> if all elements satisfy the condition
// if return false -> if at least on element fails
let marks = [40, 50, 60, 99];
let result = marks.every((mark) => {
    return mark >= 35;
});
console.log(result);


let stock = [10, 5, 0, 20];
// Check all the products available
let availabe = stock.every((item) => {
    return item > 0;
});
console.log(availabe);


let ages = [19, 22, 30, 15];
let adults = ages.every((age) => {
    return age >= 18;
});
console.log(adults);


// some() -> method checks whether at least one element satisfies a condition
// it returns true, if at least one element satisifes the condition
// false -> if none satisfy
let marks = [80, 25, 90, 70]; // Student marks
let failed = marks.some((mark) => {
    return mark < 35;
});
console.log(failed);


let numbers = [10, 20, -5, 30];
let negative = numbers.some((num) => {
    return num < 0;
});
console.log(negative);


let stock = [5, 10, 10, 8];
let outOfStock = stock.some((item) => {
    return item === 0;
});
console.log(outOfStock);



