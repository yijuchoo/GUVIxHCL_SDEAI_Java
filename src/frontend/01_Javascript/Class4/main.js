let students = ["ram", "venkat", "ravi"];
console.log(students);

let marks = [90, 80, 70, 35];
console.log(marks);

// Mixed array -> Arrays can store different data types
let data = ["ram", 26, true];
console.log(data);


// index in arrays
// Each value in an array has a position called an index
// index start from 0
let colors = ["red", "orange", "purple"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// Change the array values
let colors1 = ["red", "orange", "purple"];
colors1[0] = "green";
console.log(colors1);


// Array length -> Gives the total number of elements
let colors2 = ["red", "orange", "purple"];
console.log(colors2.length);

// We can also create empty arrays
let users = []; // Empty array
users[0] = "admin";
users[1] = "manager";
console.log(users);

// Array using constructor -> NO need to use just for knowledge purpose
let nums = new Array(1, 2, 3, 4, 5);
console.log(nums);

// Use this instead
let nums2 = [1, 2, 3, 4, 5];
console.log(nums2);

let onlineUsers = ["ravi", "venkat", "sree"];
console.log(onlineUsers);

// Add another user
onlineUsers[3] = "jack";
console.log(onlineUsers);


// Array stores multiple values, uses the index to store the value
// Access array[index] and array.length

