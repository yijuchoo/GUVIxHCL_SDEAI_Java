// reverse => method used to reverse the order of elements in an array
let students = ["ram", "venkat", "ravi"];
students.reverse();
console.log(students);
// Output: [ 'ravi', 'venkat', 'ram' ]

let songs = ['song1', 'song2', 'song3'];
songs.reverse();
console.log(songs);
// Output: [ 'song3', 'song2', 'song1' ]

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
// Output: [ 5, 4, 3, 2, 1 ]


// sort method => sorts array elements alphabetically or numerically
let students1 = ["sai", "naresh", "venkat"];
students1.sort();
console.log(students1);
// Output: [ 'naresh', 'sai', 'venkat' ]


let numbers1 = [1, 20, 10, 2, 100, 30, 3, 300];
numbers.sort();
console.log(numbers1);
// output:
// [
//     1, 20, 10,   2,
//   100, 30,  3, 300
// ]

let numbers2 = [1, 20, 10, 2, 100, 30, 3, 300];
numbers2.sort((a, b) => a - b); // Ascending order
console.log(numbers2);
// [
//    1,  2,   3,  10,
//   20, 30, 100, 300
// ]
numbers2.sort((a, b) => b - a); // Descending order
// [
//   300, 100, 30, 20,
//    10,   3,  2,  1
// ]
console.log(numbers2);


// fill method => Fill all array elements with a static value
let attendance = ["", "", ""];
attendance.fill("present");
console.log(attendance);
// Output: [ 'present', 'present', 'present' ]


let seats = ["", "", ""];
seats.fill("booked");
console.log(seats);
// Output: [ 'booked', 'booked', 'booked' ]


let marks = [0, 0, 0, 0];
marks.fill(35);
console.log(marks);
// Output: [ 35, 35, 35, 35 ]
