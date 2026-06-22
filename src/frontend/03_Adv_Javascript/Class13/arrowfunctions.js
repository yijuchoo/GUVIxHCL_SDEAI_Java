// Example 1
// normal way
function showMessage() {
  console.log("welcome");
}
showMessage();
// Output: welcome

// Arrow Function
const showMessage1 = () => {
    console.log("welcome");
}
showMessage1();
// Output: welcome

// Example 2
function greet(name) {
    console.log("hello " + name);
}
console.log("venkat");
// Output: venkat

// Arrow Function
const greet1 = (name) => console.log("hello " + name);
greet("venkat");
// Output: hello venkat


// Example 3
function add(a, b) {
    return a+ b;
}
console.log(add(10,20));
// Output: 30

// Arrow Function
const add1 = (a,b) => a + b;
console.log(add(10,40));
// Output: 50


// Example 4
function getDiscountPrice(price, discount) {
    return price - discount;
}
console.log(getDiscountPrice(1000,200));
// Output: 800

// Arrow Function
const getDiscountPrice1 = (price, discount) => price - discount;
console.log(getDiscountPrice1(1000,300));
// Output: 700
