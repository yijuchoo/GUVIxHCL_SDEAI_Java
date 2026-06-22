// Object Destructuring

// Example 1
const student = {
  id: 101,
  name: "venkat",
  role: "Mentor",
  city: "bangalore",
};
// Normal way
// access each property
const id = student.id;
const name = student.name;
const role = student.role;
const city = student.city;

// Object Destructuring Way
const { id, name, role, city } = student;
console.log(id);
console.log(name);
console.log(role);
console.log(city);


// Example 2
const employee = {
    name: "Ram",
    city: "bangalore"
};
// Normal way
// Different variable name
// const employeeName = employee.name;
// const employeeCity = employee.city;

// Object Destructuring Way
const {name: employeeName, city: employeeCity} = employee;
console.log(employeeName, employeeCity);


// Example 3
const user = {
  name: "ram"
};

// normal way
// const city2 = user.city2 || "bangalore";

// Object Destructuring Way
const {city2 = "bangalore"} = user;
console.log(city2);

