// let const var

var name = "venkat";
console.log(name);
// Output: venkat

// re-declare allowed
var city = "chennai";
var city = "bangalore";
console.log(city);
// Output: bangalore

// re-assign is allowed
var age = 30;
age = 40;
console.log(age);
// Output: 40

// function scope
function showData() {
    var message = "hello";
    console.log(message); // only here can access
}

showData();
// console.log(message); // this is not allowed
// Output: hello
/* console.log(message);
ReferenceError: message is not defined */


// var is not the block scope
if(true) {
    var mobile = "oppo";
    console.log(mobile); // I can access inside
}
console.log(mobile); // I can access outside
/* 
Output: 
oppo
oppo
 */