// generics allow us to create the reusable components:
//  (functions, classes, interfaces, types)
// that can work with different data types by maintaining the type safety

function getValue(value: any): any {
  return value;
}

// pass the number
let num = getValue(100);

// pass the string
let name = getValue("venkat");

// pass the boolean
let status = getValue(true);

// num.toUppercase(); // wrong. It should throw compile time error

console.log(num);
console.log(name);
console.log(status);

// generics
function functionName<T>(parameter: T): T {
  return parameter;
}

// T means TYPE parameter
// inside T, can be any datatype(number, string, boolean)
// last T is the output

// typescript automatically checks the type
function someValue<T>(value: T): T {
  return value;
}

// number
let num1 = someValue<number>(100);

let name1 = someValue<string>("venkat");

let status1 = someValue<boolean>(true);

console.log(num1);
// 100
console.log(name1);
// venkat
console.log(status1);
// true
