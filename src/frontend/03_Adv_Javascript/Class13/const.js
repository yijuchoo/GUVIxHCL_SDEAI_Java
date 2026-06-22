const country = "india";
console.log(country);
// Output: india

// re-assignment is not allowed
const PI = 3.14;
// PI = 974.788; // this is not allowed
console.log(PI);
// Output: 3.14

// re-declaration is not allowed
const tax = 18;
// const tax = 25;
console.log(tax);
// Output: 18

// const is the block scope
if(true) {
    const company = "guvi";
    console.log(company);
}
// console.log(company); // outside of the block is not allowed
// Output: guvi

// Another example
const GST = 18;
let amount = 1000;
let total = amount + (amount * GST / 100)
console.log(total);
// Output: 1180
