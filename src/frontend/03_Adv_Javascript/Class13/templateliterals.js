// ES6 feature = ECMASCRIPT
let name = "venkat";
let age = 20;
let address = "bangalore";
let country = "india";

// normal way of doing
let message =
  "My name is " +
  name +
  ", and I am " +
  age +
  " years old," +
  "from " +
  address +
  " and country is " +
  country;
// ES6 way - backtick (***Always use template literals)
let message1 = `My name is ${name} and I am ${age} years old, from ${address} and country is ${country}`;

console.log(message);
// My name is venkat, and I am 20 years old,from bangalore and country is india
console.log(message1);
// My name is venkat, and I am 20 years old,from bangalore and country is india

// Example 2
let item = "Mobile";
let quantity = 2;
let price = 15000;

let total = quantity * price;

console.log("You purchased " + quantity + " " + item + " for Rs. " + total);
// You purchased 2 Mobile for Rs. 30000
console.log(`You purchased ${quantity} ${item} for Rs. ${total}`);
// You purchased 2 Mobile for Rs. 30000

// Example 3
let num1 = 10;
let num2 = 20;
console.log(`Sum = ${num1 + num2}`);
// Sum = 30

// Example 4
function greet(name) {
  return `Hello ${name}`;
}
console.log(`${greet("venkat")}, Welcome to India`);
// Hello venkat, Welcome to India

// Example 5
let username = "venkat";
let city = "bangalore";
let role = "Mentor";

let profile = `
Name: ${username}
city: ${city}
role: ${role}
`;

console.log(profile);
/* 
Output:
Name: venkat
city: bangalore
role: Mentor
 */

// Example 6
let studentName = "Ram";
let marks = 85;

console.log(
`
Student: ${name}
Marks: ${marks}
Result: ${marks >= 35 ? "PASS" : "FAIL"}
`,
);
/* 
Output:
Student: venkat
Marks: 85
Result: PASS
 */