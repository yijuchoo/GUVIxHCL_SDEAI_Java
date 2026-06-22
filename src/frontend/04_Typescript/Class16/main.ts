// Example 1
let student: {
  studentID: number;
  studentName: string;
  studentCourse: string;
} = {
  studentID: 101,
  studentName: "ram",
  studentCourse: "MERN STACK",
};
console.log(student);
// { studentID: 101, studentName: 'ram', studentCourse: 'MERN STACK' }


// Example 2
let employee: {
    empID: number;
    empName: string;

    address: {
        city: string;
        state: string;
        pincode: number;
    };
} = {
    empID: 101,
    empName: "RAM",
    address: {
        city: "bangalore",
        state: "karnataka",
        pincode: 560001
    }
};
console.log(employee);
/* 
Output
{
  empID: 101,
  empName: 'RAM',
  address: { city: 'bangalore', state: 'karnataka', pincode: 560001 }
}
 */
console.log(employee.address.city);
// bangalore


// Example 3
let student1: {
  id: number;
  name: string;
  skills: string[];
} = {
  id: 1,
  name: "venkat",
  skills: ["HTML", "CSS", "javascript"],
};
console.log(student1.skills);
// [ 'HTML', 'CSS', 'javascript' ]


// Example 4
let order: {
  orderId: number;

  items: {
    productName: string;
    quantity: number;
  }[];
} = {
    orderId: 5001,

    items: [
        {
            productName: "Laptop",
            quantity: 1
        },
        {
            productName: "Mouse",
            quantity: 2
        }
    ]
};
console.log(order);
/* 
Output
{
  orderId: 5001,
  items: [
    { productName: 'Laptop', quantity: 1 },
    { productName: 'Mouse', quantity: 2 }
  ]
}
 */
console.log(order.items[1]?.productName);
// Mouse

