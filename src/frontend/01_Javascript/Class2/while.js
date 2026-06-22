// While loop is used when we want to repeat a block of code again and again until the conditions become false

// while(condition) {// code}

// Check the consition, if true, then run the code, repeat the code until it become false

let i = 1; // Starting the value
while (i <= 5) { // Condition
    console.log(i); // Print the number
    i++; // increase value
}

/* i = 1; is 1 <= 5? true; Print 1; increase 1 by 1 = 2;
i = 2; is 2 <= 5? true; Print 2; increase 2 by 1 = 3;
...
i = 5; is 5 <= 5? true; Print 5; increase 5 by 1 = 6;
6 <= 5? false; No Printing; break; */

// do while
let balance = 1000;
let choice = 1;

do {
    console.log("ATM menu: Choose your account");
    choice--;
} while (choice > 0)


let pin = 1234;
let enteredPin = 1111;
let attempts = 1;
while (enteredPin !== pin && attempts < 3) {
    console.log("Wrong pin, please re-enter your pin");
    enteredPin = 1234;
    attempts++;
}
console.log("Login Successful");
