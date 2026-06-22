// Array Destructuring -> extracting the values from an array and storing them in variables easily

// *** Very Important - Will use Array Restructuring in React

let mobiles = ["oppo", "vivo", "BPL", "Iphone"];
// normal way
// let one = mobiles[0];
// let two = mobiles[1];
// let three = mobiles[2];
// let four = mobiles[3];
// console.log(one, two, three, four);

// destructuring way
let [one, two, three, four] = mobiles;
console.log(one, two, three, four);
// Output: oppo vivo BPL Iphone


// Example 2
let student = ["Ram", 20, "bangalore"];
// Old way
// let name = student[0];
// let age = student[1];
// let city = student[2];

// destructuring way
let[name, age, city] = student;
console.log(name); // Ram
console.log(age); // 20
console.log(city); // bangalore


// Example 3
let names = ["ram", "venkat", "sai"];
// Old way
// let first = names[0];
// let third = names[2];

// destructuring way
let [first, ,third] = names;

console.log(first); // ram
console.log(third); // sai


// Example 4
let employee = ["ram"];
// Old way
// let name1 = employee[0];
// let city1 = employee[1] || "bangalore"; // default value

// destructuring way
let [name1, city1 = "bangalore"] = employee;

console.log(name1); // ram
console.log(city1); // bangalore


// Example 5
function getUser() {
    return ["ram", "student"];
}
// Old way
// let user = getUser();
// let name2 = user[0];
// let role = user[1];

// destructuring way
let [name2, role] = getUser();

console.log(name2); // ram
console.log(role); // student
console.log(name2, role); // ram student
