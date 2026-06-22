// interface is a contract (blueprint) that defines the structure of an object

/* 
it tells typescript:
1. What properties should exist
2. What type those properties should have
3. What method should be available

interfaces help us to create the reusable object structure
*/

// Example 1
const emp: {
  id: number;
  name: string;
  age: number;
} = {
  id: 1,
  name: "ram",
  age: 98,
};
console.log(emp);
// { id: 1, name: 'ram', age: 98 }

interface Employee {
  id: number;
  name: string;
  age: number;
}

const emp1: Employee = {
  id: 1,
  name: "Ram",
  age: 50,
};

const emp2: Employee = {
  id: 2,
  name: "venkat",
  age: 40,
};
console.log(emp1);
// { id: 1, name: 'Ram', age: 50 }
console.log(emp2);
// { id: 2, name: 'venkat', age: 40 }

// Interface with methods
// Example 2
interface Student {
  id: number;
  name: string;
  display(): void;
}

const s1: Student = {
  id: 1,
  name: "Ram",
  display() {
    console.log(this.id);
    console.log(this.name);
  },
};
// call the display method
s1.display();
/* 
1
Ram 
*/

// interface with nested objects
// Example 3

interface Address {
  city: string;
  state: string;
  country: string;
  pincode: number;
}

interface Player {
  playerID: number;
  playerName: string;
  playerAddress: Address;
}

const player1: Player = {
  playerID: 18,
  playerName: "Virat",
  playerAddress: {
    city: "Bangalore",
    state: "KA",
    country: "india",
    pincode: 560036,
  },
};

const player2: Player = {
  playerID: 1,
  playerName: "Rahul",
  playerAddress: {
    city: "Chennai",
    state: "IN",
    country: "india",
    pincode: 560031,
  },
};
console.log(player1);
/* 
Output
{
  playerID: 18,
  playerName: 'Virat',
  playerAddress: { city: 'Bangalore', state: 'KA', country: 'india', pincode: 560036 }
}
 */
console.log(player2);
/* 
Output
{
  playerID: 1,
  playerName: 'Rahul',
  playerAddress: { city: 'Chennai', state: 'IN', country: 'india', pincode: 560031 }
}
 */