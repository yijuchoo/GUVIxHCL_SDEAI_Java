// types is also help to create blueprint for an object and it creates the ??? name for
// Example 1
interface Employee {
  id: number;
  name: string;
}

const emp: Employee = {
  id: 101,
  name: "Ram",
};
console.log(emp);
// { id: 101, name: 'Ram' }

// =============================

type Employee1 = {
  id: number;
  name: string;
};

const emp1: Employee1 = {
  id: 101,
  name: "Ram",
};
console.log(emp1);
// { id: 101, name: 'Ram' }

// Example 2
type Add = (a: number, b: number) => number;
const sum: Add = (a, b) => a + b;
console.log(sum(10, 20));
// 30

interface Add1 {
  (a: number, b: number): number;
}
const sum1: Add1 = (a, b) => a + b;
console.log(sum1(10, 20));
// 30

// =============================

// Example 3
type Names = string[];
const users: Names = ["ram", "venkat", "siva"];
console.log(users);
// [ 'ram', 'venkat', 'siva' ]

interface Names1 {
  [index: number]: string;
}

const users1: Names1 = ["ram", "venkat", "siva"];
console.log(users1);
// [ 'ram', 'venkat', 'siva' ]

// =============================

// Primitive Types
type UserId = number;
let id: UserId = 1001;
console.log(id);
// 1001

// interface UserId1 = number; we can't assign the primitive types

// Union Type
type Status = "Success" | "Error" | "Loading";

let result1: Status = "Success";
let result2: Status = "Error";
console.log(result1);
// Success
console.log(result2);
// Error

// interface Status1 =
// | "Success"
// | "Error"
// not possible; The right-hand side of an arithmetic operation 
// must be of type 'any', 'number', 'bigint' or an enum type.

// declaration merging
interface Student {
  id: number;
}

interface Student {
  name: string;
}

const st11: Student = {
  id: 101,
  name: "venkat",
};
console.log(st11);
// { id: 101, name: 'venkat' }
