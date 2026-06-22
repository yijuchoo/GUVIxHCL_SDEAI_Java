// HOF => Higher Order Function in javascript
// HOF is the function takes another function as an argument or, return a function

function greetUser(name, hof){
    console.log("Hello, " + name);
    // call the function
    hof();
}

// function
function sayHello(){
    console.log("How are you?");
}

function movieMessage(){
    console.log("Let's go to the movie");
}

greetUser("Ram", sayHello); // passing a function as an argument
greetUser("Venkat", movieMessage);