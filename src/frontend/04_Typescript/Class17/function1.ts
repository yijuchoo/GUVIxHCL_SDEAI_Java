// function is the block of code that performs specific task
// function helps us to write the reusable code

// function functionName(parameter: type) : returnType {
// return value;
// }

// Example 1
// function with parameter
function greet(name: string): string {
  return "Hello " + name;
}
console.log(greet("Venkat"));
// Hello Venkat


// Example 2
// function without parameters -> a function does not accept any input
// void -> function does not reurn anything
function sayHello(): void {
  console.log("hello world");
}
sayHello();
// hello world


// Example 3
// number
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));
// 30


// Example 4
function getFullName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}
console.log(getFullName("Venkat", "Gochipand"));
// Venkat Gochipand


// Example 5
// boolean value
function isAdult(age: number): boolean {
  return age >= 18;
}
console.log(isAdult(20));
// true
console.log(isAdult(10));
// false


// Example 6
// Optional parameter ?
function welcome(name: string, city?: string): string {
  if (city) {
    return `Welcome ${name} from ${city}`;
  }
  return `Welcome ${name}`;
}
console.log(welcome("Venkat"));
// Welcome Venkat
console.log(welcome("Venkat", "Bangalore"));
// Welcome Venkat from Bangalore


// Example 7
// default parameters -> provide the default value if the user does not pass
function greetUser(name: string = "guest"): string {
  return `Hello ${name}`;
}
console.log(greetUser("Venkat"));
// Hello Venkat
console.log(greetUser());
// Hello guest
