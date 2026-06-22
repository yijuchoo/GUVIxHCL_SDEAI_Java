// join method -> converts all the array elements into a single string
let students = ["ram", "venkat", "ravi"];
console.log(students);
// [ 'ram', 'venkat', 'ravi' ]
// join names with comma
let result = students.join(", ");
console.log(result);
// ram, venkat, ravi

let address = ["bangalore", "karantata", "india"];
let fullAddress = address.join("-");
console.log(fullAddress);
// bangalore-karantata-india

// COnvert array into sentence
let words = ["javascript", "is", "awesome"];
console.log(words);
// [ 'javascript', 'is', 'awesome' ]
let sentence = words.join(" ");
console.log(sentence);
// javascript is awesome


let folders = ["users", "pictures", "class4"];
let path = folders.join("/");
console.log(path);
// users/pictures/class4


// splice -> method adds, removes or replaces elemesnts in an array
// array.splikce(startIndex, deleteCount, additem1, additem2...)

let numbers = [10, 20, 30, 40];
numbers.splice(1, 2); // start from index 1 = value 20, remove 2 elements = 20 & 30
console.log(numbers);
// [ 10, 40 ]


// Add the new elements
let students1 = ["rama", "venkat"];
// Add the student at index 1
students1.splice(1, 0, "sita", "jack");
console.log(students1);
// [ 'rama', 'sita', 'jack', 'venkat' ]


// slice method -> returns a portion of an array without the original array
// slice -> array.slice(startIndex, endIndex) -> start will be included, end will be excluded
let students2 = ["rama", "sita", "venkat", "ravi"];
let result2 = students.slice(0, 2); // include from index 0, from index 2 onwards will be excluded
console.log(result2);
// [ 'ram', 'venkat' ]


let chats = ["hi", "hello", "good morning", "welcome"];
let recentChats = chats.slice(2);
console.log(recentChats);
// [ 'good morning', 'welcome' ]