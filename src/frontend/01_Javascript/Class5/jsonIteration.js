// JSON iteration means looping through JSON data to access

// let student = {
//     name: "venkat",
//     age: 20,
//     course: "Javascript"
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

// loop through object
// for(let key in student) {
//     // print key and value
//     console.log(key, ":", student[key]);
// }
/* 
name : venkat
age : 20
course : Javascript
 */


// array of objects
let users = [
    {name: "venkat", age: 20},
    {name: "sreee", age: 26},
    {name: "rama", age: 40}
];

// loop through array
// for(let user of users){
//     console.log(user.name);
// }
/* 
venkat
sreee
rama
*/

// object.keys() -> return all the obejct keys
// let ipl = {
//     team: "RCB",
//     color: "red",
//     win: "yes"
// };

// Get all the keys
// let keys = Object.keys(ipl);
// console.log(keys);
// [ 'team', 'color', 'win' ]


// Get the value
// let values = Object.values(ipl);
// console.log(values);
// [ 'RCB', 'red', 'yes' ]


// Both the keys and values
// let entries = Object.entries(ipl);
// console.log(entries);
// [ [ 'team', 'RCB' ], [ 'color', 'red' ], [ 'win', 'yes' ] ]


// loop keys
keys.forEach(function(key){
    console.log(key, ":", ipl[key])
});
/* 
team : RCB
color : red
win : yes
*/


// loop values
values.forEach(function(value){
    console.log(value)
});
/* 
RCB
red
yes
*/


// loop entries
for(let [key, value] of entries){
    console.log(key, ":", value);
};
/* 
team : RCB
color : red
win : yes
*/

