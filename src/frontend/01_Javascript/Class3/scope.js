// let value = 100;
// function showValue() {
//     console.log(value);
// }
// showValue();
// console.log(value);

// 100 is declared outside the function, so it becomes a global variable and accessible anywhere


// function scope:
// variables declared inside the function can only be accessed inside that function 
// function studentDetails() {
//     let studentName = "Venkat";
//     console.log(studentName);
// }

// studentDetails();
// console.log(studentName);

// ReferenceError: studentName is not defined
// studentName exists only inside the studentDetails(), outside the function it cannot be accessed.


// if(true) {
//     var course = "Frontend";
// }
// console.log(course);
// var ignores the block scope, it is function scoped.


// lexical scope or closure
// Inner function can access variables from the outer functions
// Javascript decides scope 

function outerFunction() {
    let outerVariable = "I am outer";
    function innerFunction() {
        console.log(outerVariable);
    }
    innerFunction()
}
outerFunction();


