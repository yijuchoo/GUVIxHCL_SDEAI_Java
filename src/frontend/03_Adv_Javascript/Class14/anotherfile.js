// import { add, substract } from "./main";
// import { firstName, lastName, age } from "./main";
// import { mobile as myMobile } from "./main";

// console.log(add(10, 50));
// console.log(substract(50, 10));
// console.log(firstName, lastName, age);
// console.log(myMobile);

// import everything using *
import * as utils from "./main.js";

console.log(utils.add(10, 50));
// 60
console.log(utils.substract(50, 10));
// 40
console.log(utils.firstName, utils.lastName, utils.age);
// venkat ram 20
console.log(utils.mobile);
// iPhone
