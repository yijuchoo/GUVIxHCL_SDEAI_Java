
let calculateFare = function(distance, pricePerKm){
    // Base Fare
    let baseFare = 25;

    // calculate the total fare
    let totalFare = baseFare + (distance * pricePerKm);
    console.log("Distance", distance, "km");
    console.log("Price per km: ", pricePerKm);
    console.log("Total Fare: ", totalFare);
}
calculateFare(12, 15);


// Distance: 12 km
// Price per km: 15
// Total Fare: 230


// Authentication Module
let authSystem = (function(){
    let users = [
        {
            username: "admin",
            password: "1234"
        },
        {
            username: "manager",
            password: "5678"
        }
    ];

    // return the public methods
    return {
        // login method
        login: function(username, password){
            // Find the matching user 
            let validUser = users.find(function(user){
                return (
                    user.username === username &&
                    user.password === password
                )
            });

            if(validUser){
                console.log("Login successful");
            } else {
                console.log("Invalid credentials");
            }
        }
    }
})();

authSystem.login("user", "1234");


// Example 2
function createAuthSystem(){
    let users = [
        {
            username: "admin",
            password: "1234"
        },
        {
            username: "manager",
            password: "5678"
        }
    ]

    // return the public methods
    return {
        // login method
        login: function(username, password){
            // Find the matching user 
            let validUser = users.find(function(user){
                return (
                    user.username === username &&
                    user.password === password
                )
            });

            if(validUser){
                console.log("Login successful");
            } else {
                console.log("Invalid credentials");
            }
        }
    }
};

let authSystem2 = createAuthSystem();
authSystem2.login("admin", "1234");




// Example 3
let searchFile = function finder(files, target){
    // loop through files
    for(let i = 0; i < files.length; i++){
        // Check the file
        if(files[i] === target){
            return "File found";
        }
    }
    return "File is not found";
}

// Files list
let files = [
    "sample.js",
    "example.js",
    "index.html"
];
console.log(searchFile(files, "index.html"));
