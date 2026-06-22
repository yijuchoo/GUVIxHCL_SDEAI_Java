function getUser(callback) {
  console.log("Fetching user...");

  const user = {
    id: 101,
    name: "venkat",
  };
  callback(user);
}

function getCart(user, callback) {
  console.log(`Fetching cart for ${user.name}`);

  //   Mock the cart
  const cart = {
    items: ["Laptop", "Mouse"],
  };
  callback(cart);
}

function createOrder(cart, callback) {
  console.log("Creating Order");
  const order = {
    orderId: 1001,
  };
  callback(order);
}

function makePayment(order, callback) {
  console.log(`Processing payment for order ${order.orderId}...`);

  const payment = {
    status: "success",
  };
  callback(payment);
}

function sendMail(payment, callback) {
  console.log("Sending confirmation email...");
  callback("Email sent successfully");
}

getUser(function (user) {
  getCart(user, function (cart) {
    createOrder(cart, function (order) {
      makePayment(order, function (payment) {
        sendMail(payment, function (message) {
          console.log(message);
        });
      });
    });
  });
});

// callback hell
/* 
Output:
Fetching user...
Fetching cart for venkat
Creating Order
Processing payment for order 1001...
Sending confirmation email...
Email sent successfully
 */