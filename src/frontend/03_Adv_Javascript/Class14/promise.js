// Creating a promise
// Example 1
const promise = new Promise((resolve, reject) => {
  // no resolve, no reject
});

console.log(promise);
// Promise { <pending> }

// Example 2
const promise1 = new Promise((resolve, reject) => {
  let letsGoMovie = true;
  if (letsGoMovie) {
    resolve("Wow, finally we are going to movie");
  }
});

console.log(promise1);
// Promise { 'Wow, finally we are going to movie' }

// Example 3
const promise2 = new Promise((resolve, reject) => {
  let letsGoMovie = false;
  if (letsGoMovie) {
    resolve("Wow, finally we are going to movie");
  } else {
    reject("No, we are not going");
  }
});

console.log(promise2);
// Promise { <rejected> 'No, we are not going' }

// Example 4
// Best practice use .then -> for success case
promise2
  .then((result) => {
    // .then -> for success case
    console.log(result);
  })
  .catch((error) => {
    // catch for the rejected state
    console.log(error);
  });


// login Example
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    // check the Credentials
    if (username === "admin" && password === "12345") {
      resolve("login successful");
    } else {
      reject("Invalid credentials");
    }
  });
}

loginUser("admin", "12345")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
/* 
Output
login successful
No, we are not going
 */