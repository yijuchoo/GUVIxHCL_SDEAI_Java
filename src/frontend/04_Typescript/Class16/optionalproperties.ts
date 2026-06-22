// optional property -> may or may not exist in an object ( use of '?' question mark)

type Student = {
  name: string;
  age?: number;
};

let student1: Student = {
  name: "venkat",
  age: 20,
};
console.log(student1);
// { name: 'venkat', age: 20 }

let student2: Student = {
  name: "ravi",
};
console.log(student2);
// { name: 'ravi' }

// Example 2
type Customer = {
  name: string;
  city?: string;
};

function printCustomer(customer: Customer) {
  console.log("Name:", customer.name);
  console.log("City:", customer.city);
}

printCustomer({
  name: "venkat",
});
/* 
Output
Name: venkat
City: undefined
 */

printCustomer({
  name: "ram",
  city: "bangalore",
});
/* 
Output
Name: ram
City: bangalore
 */