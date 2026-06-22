// async await are used to work with promise in a simpler and more readable way
// instead of using .then() and.catch we can use async and await

// Callback Example
// function login() {
//   console.log("User logged in");
//   callback();
// }

// function getProducts(callback) {
//   console.log("Products loaded");
//   callback();
// }

// function addToCart(callback) {
//   console.log("Products added to Cart");
// }

// function MakePayment(callback) {
//   console.log("Payment successful");
// }

// login(function () {
//   getProducts(function () {
//     addToCart(function () {
//       makePayment(function () {
//         console.log("Order completed successfully");
//       });
//     });
//   });
// });

// console.log("\n--- Promise Chaining Example ---");
// Promise Chaining

function login() {
  return Promise.resolve("User logged in");
}

function getProducts() {
  return Promise.resolve("Products loaded");
}

function addToCart() {
  return Promise.resolve("Products added to Cart");
}

function makePayment() {
  return Promise.resolve("Payment successful");
}

// login()
//   .then(function (message) {
//     console.log(message);
//     return getProducts();
//   })
//   .then(function (message) {
//     console.log(message);
//     return addToCart();
//   })
//   .then(function (message) {
//     console.log(message);
//     return makePayment();
//   })
//   .then(function (message) {
//     console.log(message);
//     console.log("Order Completed");
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// console.log("\n--- Async Await Example ---");

// async await
async function placeOrder() {
    let loginResult = await login();
    console.log(loginResult);
    let productResult = await getProducts();
    console.log(productResult);
    let cartResult = await addToCart();
    console.log(cartResult);
    let paymentResult = await makePayment();
    console.log(paymentResult);
    console.log("Order completed");
}
placeOrder();
/* 
Output
User logged in
Products loaded
Products added to Cart
Payment successful
Order completed
 */

// callback -> callback hell -> promise -> promise chaining -> async await