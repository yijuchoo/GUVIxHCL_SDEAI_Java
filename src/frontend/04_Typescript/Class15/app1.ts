// Example 1
let product: {
  id: number;
  name: string;
  price: number;
} = {
  id: 191,
  name: "iphoen",
  price: 90000,
};
console.log(product);
// { id: 191, name: 'iphoen', price: 90000 }
// product.price = "ninety thousand"; // string is not assignable to number type

// Example 2
let employee: {
  empId: number;
  empName: string;
  department: string;
  address: string;
  zip: number;
} = {
  empId: 1001,
  empName: "ram",
  department: "Engineering",
  address: "bangalore",
  zip: 560036,
};
console.log(employee);
/* 
Output:
{
  empId: 1001,
  empName: 'ram',
  department: 'Engineering',
  address: 'bangalore',
  zip: 560036
}
 */

// Example 3
let employee1: {
  empId: number;
  empName: string;
  department: string;
  address: {
    city: string;
    state: string;
    zip: number;
  };
  skills: string[];
  projects: {
    projectId: number;
    projectName: string;
    description: string;
    teamMembers: {
      memberName: string;
      memberSkill: string;
    }[];
  }[];
} = {
  empId: 1001,
  empName: "ram",
  department: "Engineering",
  address: {
    city: "bangalore",
    state: "KA",
    zip: 560036,
  },
  skills: ["javascript", "react", "typescript", "nodejs"],
  projects: [
    {
      projectId: 1,
      projectName: "Guvi online shopping",
      description: "online shopping is the project",
      teamMembers: [
        {
          memberName: "ram",
          memberSkill: "javascript",
        },
      ],
    },
    {
      projectId: 2,
      projectName: "Flight booking",
      description: "online flight booking is the project",
      teamMembers: [
        {
          memberName: "venkat",
          memberSkill: "typescript",
        },
      ],
    },
  ],
};
console.log(employee1);
/* 
Output:
{
  empId: 1001,
  empName: 'ram',
  department: 'Engineering',
  address: { city: 'bangalore', state: 'KA', zip: 560036 },
  skills: [ 'javascript', 'react', 'typescript', 'nodejs' ],
  projects: [
    {
      projectId: 1,
      projectName: 'Guvi online shopping',
      description: 'online shopping is the project',
      teamMembers: [Array]
    },
    {
      projectId: 2,
      projectName: 'Flight booking',
      description: 'online flight booking is the project',
      teamMembers: [Array]
    }
  ]
}
 */

console.log(employee1.projects[0]?.teamMembers);
// [ { memberName: 'ram', memberSkill: 'javascript' } ]

