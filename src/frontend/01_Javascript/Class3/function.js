// functions declaration is way to create the reusable block of code in Javascript using the function keyword
// it allows us to write the code once and reuse it multiple times.

function welcome(){
    console.log("Welcome here");
}
welcome();

function hello(name) {
    console.log("Welcome " + name);
}
// function call... pass the value to display
hello("Yirou");
hello("Venkat");
hello("Shalini");

function add(num1, num2){
    return num1 + num2;
}
let result = add(10, 29);
console.log(result);

// ------------------------------------
// Even or Odd
function checkEvenOrOdd(number) {
    if(number % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}

console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(7));

// ------------------------------------
// Find the Largest Number
function findLargest(a, b){
    if(a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(findLargest(50, 20));


function greet(name) {
    return "Hello, " + name;
}

function displayMessage(){
    let message = greet("Ram");
    console.log(message);
}
displayMessage();

// ------------------------------------
// function with Default paramters
function multiply(a = 1, b = 5){
    return a * b;
}
console.log(multiply(10, 2));
console.log(multiply());


function validateLogin(username, password){
    if(username === "admin" && password === "1234"){
        return "Login Successful";
    } else {
        return"Invalid Credentials";
    }
}
console.log(validateLogin("admin", "1234"));
console.log(validateLogin("Venkat", "1111"));