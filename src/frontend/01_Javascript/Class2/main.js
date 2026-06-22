// if else is decision making statement in Javascript

// if(condition) {
// true code will execute
// } else {
//     false else block
// }

// let age = 20;
// if (age >= 18) {
//   console.log("eligible for vote");
// } else {
//   console.log("not eligible for vote");
// }

// let marks = 36;
// if (marks >= 36) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// // Even Number
// let number = 9;
// if (number % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }

// let balance = 5000;
// let withdraw = 3000;
// if (balance >= withdraw) {
//   console.log("Withdraw successfull");
// } else {
//   console.log("Insufficient balance");
// }

// Multiple Conditions
let marks = 75;
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}

let age = 22;
let hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    console.log("Yes, you can proceed your drive journey");
  } else {
    console.log("You need license");
  }
} else {
  console.log("Not possible to enter ORR");
}

// Biggest of Three Numbers

let x = 15;
let y = 45;
let z = 30;
if (x > y && x > z) {
    console.log("X is the biggest")
} else if (y > x && y > z) {
    console.log("Y is the biggest")
}

// Nested if else
let ageCheck = 25;
let hasPassport = true;
let hasVisa = false;

if (ageCheck >= 18) {
  if (hasPassport) {
    if (hasVisa) {
      console.log("Can travel");
    } else {
      console.log("Can't travel");
    }
  } else {
    console.log("Not possible to travel");
  }
} else {
  console.log("Not Allowed to travel");
}
