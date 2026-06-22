// IIFE = Immediately Invoked Function Expression
// function which is created will execute immediately after the creation

function app(){
    console.log("are you calling me");
}
app();

(function(){
    console.log("are you calling me too");
})();

// (function(){}) -> function expression
// () => executes immediately

// IIFE used to execute the code immeidately run the initial code

(function(name){
    console.log("Hello, " + name);
})("Yirou");


(function(a, b){
    console.log(a + b);
})(10, 20);