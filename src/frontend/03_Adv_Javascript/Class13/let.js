// let is the block scope
let name = "venkat";
console.log(name);
// Output: venkat

// re-assign is allowed
let age  =20;
age = 30;
console.log(age);
// Output: 30

// re-declaration is not allowed
let city = "chennai";
// let city = "bangalore"; // not possible in let
console.log(city);
// Output: chennai


// let is the block scope
if(true) {
    let score = 100;
    console.log(score); // this is allowed
}
// console.log(score);
// Output: 100

// Another example
let orderStatus = "pending";
console.log(orderStatus);
orderStatus = "shipped";
console.log(orderStatus);
orderStatus = "delivered";
console.log(orderStatus);

function showData() {
    let z = 200;
    console.log(z);
}
showData();
// console.log(z);
/* 
Output: 
pending
shipped
delivered
200 
*/