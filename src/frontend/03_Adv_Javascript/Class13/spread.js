// spread operator -> used to expand elements of an array, object, strings into individual elements.

let mobiles = ["oppo", "vivio", "samsung"];
let copy = [];
for (let i = 0; i < mobiles.length; i++) {
  copy[i] = mobiles[i];
}
console.log(copy); // copy array
// [ 'oppo', 'vivio', 'samsung' ]
console.log(mobiles); // original array
// [ 'oppo', 'vivio', 'samsung' ]

// With Spread Operator "..."
let mobiles1 = ["bpl", "vivo", "samsung"];
let copy1 = [...mobiles1]; // spread operator

console.log(copy1);
// [ 'bpl', 'vivo', 'samsung' ]
console.log(mobiles1);
// [ 'bpl', 'vivo', 'samsung' ]

// Example 2
// normal way: I wanted to merge 2 arrays
let frontend = ["html", "css"];
let backend = ["nodejs", "mongodb"];

let fullstack = frontend.concat(backend); // Old way
let fullstack1 = [...frontend, ...backend]; // With spread operator
console.log(fullstack);
// [ 'html', 'css', 'nodejs', 'mongodb' ]
console.log(fullstack1);
// [ 'html', 'css', 'nodejs', 'mongodb' ]

// Example 3
// Add items to the array
let movies = ["RRR", "veerabhadra"];

movies.push("bahubali"); // normal way
let newMovies = [...movies, "new movie"]; // spread operator

console.log(movies);
// [ 'RRR', 'veerabhadra', 'bahubali' ]
console.log(newMovies);
// [ 'RRR', 'veerabhadra', 'bahubali', 'new movie' ]

// Example 4A
// object
let employee = {
    id: 1,
    name: "RAM",
};

let employee1 = {
    id: 2,
    name: "venkat",
};

let copyEmp = Object.assign({}, employee); // normal way of doing
let copyEmp1 = { ...employee }; // spread
console.log(copyEmp);
// { id: 1, name: 'RAM' }
console.log(copyEmp1);
// { id: 1, name: 'RAM' }

// Example 4B
// Merge
let mergEmp = Object.assign({}, employee, employee1); // normal way
let mergeEmp1 = { ...employee, ...employee1 }; // spread
console.log("merge", mergEmp);
// merge { id: 2, name: 'venkat' }
console.log(mergeEmp1);
// { id: 2, name: 'venkat' }