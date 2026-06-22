// Switch case is used when we want to compare one value against multiple options

// switch(expression) {
//     case value1:
//     break;
// }

let grade = "C";
switch(grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Fail");
}


let mobile = "iphone";
switch(mobile) {
    case "vivo":
    case "iphone":
    case "oppo":
        console.log("This is a mobile brand");
        break;
    default:
        console.log("Unknown");
}

// Only use switch when we have exact values, no conditions
//  Conditions -> if else

let marks = 72;
if(marks >= 90) {
    console.log("A");
} else if(marks >= 75) {
    console.log("B");
} else if(marks >= 50) {
    console.log("C");
} else {
    console.log("Fail");
}