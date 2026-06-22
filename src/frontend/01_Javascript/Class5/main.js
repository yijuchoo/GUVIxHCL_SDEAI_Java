// Javascript object
let users = {
    name: "ram",
    age: 25,
    greet: function(){
        console.log("Hello");
    }
};
console.log(users);
// { name: 'ram', age: 25, greet: [Function: greet] }

// Convert JS object to JSON
let jsonData = JSON.stringify(users);
console.log(jsonData);
// {"name":"ram","age":25}


// json.stringify() method -> Converts javascript object to JSON string

// Why we use stringify()
/* - Sending the data to Server
- Store in localStorage
- api requests
 */


// JSON.parse() -> Converts JSON string => Javascript object
// use single quote '' becos we are treating the JS object as a String
// {"name": "rama", "age": 20} -> is a JS object
let jsonData1 = '{"name": "rama", "age": 20}'; 
console.log(jsonData1);
// {"name": "rama", "age": 20}
console.log(typeof(jsonData1));
// string

let user = JSON.parse(jsonData1);
console.log(user);
// { name: 'rama', age: 20 }
console.log(typeof(user));
// object
console.log(user.name);
// rama