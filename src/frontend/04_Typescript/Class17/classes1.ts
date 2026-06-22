// class is the blueprint for creating the object
// class -> helps us to group the data/ properties and methods into a single unit
// class is a template that defines the properties and methods that object created from it will have.

// Object Example 1
const student1 = {
  name: "Ram",
  age: 20,
  city: "Bangalore",

  // function to display the student detail
  displayInfo: function () {
    console.log("Student's name:", this.name);
    console.log("Student's age:", this.age);
    console.log("Student's city:", this.city);
  },
};
student1.displayInfo();
/* 
Output:
Student's name: Ram
Student's age: 20
Student's city: Bangalore
 */


const student2 = {
  name: "Venkat",
  age: 20,
  city: "Chennai",

  // function to display the student detail
  displayInfo: function () {
    console.log("Student name:", this.name);
    console.log("Student age:", this.age);
    console.log("Student city:", this.city);
  },
};
student2.displayInfo();
/* 
Output:
Student name: Venkat
Student age: 20
Student city: Chennai
 */


// Object Example 2
const customer1 = {
  name: "Venkat",
  city: "Bangalore",
  billDetails: function () {
    console.log(`${this.name} and from city ${this.city}`);
  },
};
customer1.billDetails();
// Venkat and from city Bangalore


// Solution to objects is class -> Refer to solutionclasses.ts