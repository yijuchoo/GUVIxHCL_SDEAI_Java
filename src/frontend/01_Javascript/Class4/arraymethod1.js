// Javascript array methods
// push method => used to add one or more elements to the end of the array

// Example 1: Adding a New Student
let students = ["ram", "venkat"];
// Add the new students at the end
students.push("sree");
console.log(students);

let cart = ["shoes", "t-shirt"];
cart.push("watch", "AC");
console.log(cart);


let messages = ["hello", "how are you"]; // Existing Messages
messages.push("I am fine");
console.log(messages);


// Popup: Method removes the last element from an array

// Example: Remove the last product
let products = ["mobile", "laptop", "watch"];
products.pop();
console.log(products);


// Stack Example
let stack = [10, 20, 30];
stack.pop(); // pop 30
stack.pop(); // pop 20
stack.pop(); // pop 10


// Shift method => Method removes the first element from an array
let customers = ["ram", "ravi", "venkat"];
customers.shift();
console.log(customers);

let notifications = ["messages1", "messages2"];
notifications.shift(); // remove the oldest notifications
console.log(notifications);


// Unshift => methods adds one or more elements to the beginning of the array
let queue = ["sita", "vankat"];
queue.unshift("rama");
console.log(queue);

// Task priority
let tasks = ["complete homework", "watch movies"];
tasks.unshift("attend the meeting");
console.log(tasks);

// push -> Adding the element at the end
// pop -> Removing the element at the end
// unshift -> Adding the element from the beginning
// shift -> Removing the element from the beginning