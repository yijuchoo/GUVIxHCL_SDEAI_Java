// Example 1
let user = {
  id: 1,
  name: "venkat",
  address: {
    city: "bangalore",
    state: "KA",
  },
  skills: ["HTML", "CSS"],
};
console.log(user);
/* 
Output:
{
  id: 1,
  name: 'venkat',
  address: { city: 'bangalore', state: 'KA' },
  skills: [ 'HTML', 'CSS' ]
} 
*/

// Update the address, skills without modifying the original object
let updatedUser = {
  ...user, // existing object
  address: {
    ...user.address,
    city: "chennai",
  },
  skills: [...user.skills, "javascript"],
};
console.log(updatedUser);
/* 
Output:
{
  id: 1,
  name: 'venkat',
  address: { city: 'chennai', state: 'KA' },
  skills: [ 'HTML', 'CSS', 'javascript' ]
}
 */


// Example 2
let training = {
  title: "Javascript training",

  trainer: {
    name: "venkat",
    age: 20,
  },

  students: [
    "ram", 
    "ravi"
  ]
};

let updatedTraining = {
    ...training,
    trainer: {
        ...training.trainer,
        experience: 10
    },
    students: [
        ...training.students,
        "david"
    ]
};
console.log(updatedTraining);
/* 
Output:
{
  title: 'Javascript training',
  trainer: { name: 'venkat', age: 20, experience: 10 },
  students: [ 'ram', 'ravi', 'david' ]
}
 */


// Example 3
let userStats = {
    totalUsers: 5000
};

let salesStats = {
    totalSales: 10000
};

let revenueStats = {
    revenue: 500000
};

let dashboard = {
    ...userStats,
    ...salesStats,
    ...revenueStats
}
console.log(dashboard);
/* 
Output:
{ totalUsers: 5000, totalSales: 10000, revenue: 500000 }
 */