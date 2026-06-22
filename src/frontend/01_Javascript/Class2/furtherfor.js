// for... in loop
// for... of loop
// foreach

// for .. in loop used to loop through object keys(properties) or array indexes
// for(let key in object) {
// }

// for in loop example
// let student = {
//     name: "Ram",
//     age: 20,
//     city: "bangalore"
// }
// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.city);

// for(let key in student) {
//     console.log(key + ": " + student[key]);
// }

// // for of loop example
// // used to loop through values of an array, strings etc

// let mobiles = ["oppo", "vivo", "iphone"];
// // console.log(mobiles[0]);
// // console.log(mobiles[1]);
// // console.log(mobiles[2]);
// for(let key of mobiles) { // or use for(let mobile of mobiles)
//     console.log(key);     // console.log(mobile);
// }


// for each loop
// used to loop array only, and executes a function for each element
// array.forEach(function(value, index))
// let nums = [10, 20, 30];
// nums.forEach(function(value, index) {
//     console.log(index + " " + value);
// })


// let nums = [10, 20, 30];
// let sum = 0;
// nums.forEach(function(num) {
//     sum = sum + num;
// })
// console.log(sum);

// let students = ["ram", "joy", "venkat"];
// students.forEach(function(name) {
//     console.log(name + " is present");
// })


// filter, sort, reverse, fill, index, first

let user = {
    name: "ram",
    age: 20
}

Object.keys(user).forEach(function(u) {
    console.log(u);
})

let set = new Set([1,2,3]);
set.forEach(function(num) {
    console.log(num);
})

let map = new Map([
    ["name", "ram"],
    ["age", 50]
])
map.forEach(function(value,key) {
    console.log(key + ": " + value);
})