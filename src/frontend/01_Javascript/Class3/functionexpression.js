// function expression... storing a function inside a variable

// In javascript, function are treated as values, so we can assign them to the variables

// const variableName = function(){}

// Example 1
const greet = function(){
    console.log("Hello Javascript");
}

greet();

// Example 2
const add = function(a, b){
    return a + b;
}
console.log(add(10, 29));


// Example 3
const checkEvenOrOdd = function(number){
    if(number % 2 === 0){
        return "Even Number";
    } else {
        return "Odd Number";
    }
}
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7));


// Example 4
const welcomeUser = function(name){
    console.log("Welcome, " + name);
}

welcomeUser("Venkat");
welcomeUser("Ram");


// Example 5
// named function, we can also give a name to the function
const greet1 = function(){

    console.log("Helloooo");
}
greet1();
