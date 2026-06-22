// break is used to stop the loop immediately and come out of the loop
let products = ["mouse", "keyboard", "laptop"];
for(let i = 0; i < products.length; i++) {
    if(products[i] === "laptop") {
        console.log("laptops found");
        break; // Stop searching
    }
}


// continue -> is used to skip current iteration and move to the next loop

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue; // skip 3
    }
    console.log(i);
}

let students = ["Venkat", "Abesnt", "Ram", "Absent", "Jack"];
for(let i = 0; i < students.length; i++) {
    if(students[i] === "Absent") {
        continue; // Skip absent students
    }
    console.log("Presnt", students[i]);
}