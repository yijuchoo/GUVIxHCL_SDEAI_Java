// callback is a function that is passed as a argument
// to another function and is executed later after some task is completed

// a callback is a function that is passed into another function and called inside that function when needed

// --- Normal Method ---
// function sendNotification() {
//   console.log("food is ready, notification snet to customer");
// }

// function sendSMS() {
//   console.log("SMS sent to customer");
// }

// function updateOrderStatus() {
//   console.log("Order Status changed to ready");
// }

// function generateInvoice() {
//   console.log("Invoice generated");
// }


// function prepareFood() {
//   console.log("Preparing food");
//   // All actions are hardcoded
//   sendNotification();
//   sendSMS();
//   updateOrderStatus();
//   generateInvoice();
// }

// prepareFood(); // start the process
// // Send SMS, email, whatsapp messages



// --- Callback Method ---
function sendNotification() {
  console.log("food is ready, notification sent to customer");
}

function sendSMS() {
  console.log("SMS sent to customer");
}

function updateOrderStatus() {
  console.log("Order Status changed to ready");
}

function generateInvoice() {
  console.log("Invoice generated");
}

// (callback) -> can be any parameter name
function prepareFood(callback) {
  console.log("Preparing food");
    // Execute the callback
  callback();
}
// start the process
prepareFood(sendNotification);
prepareFood(sendSMS);
prepareFood(updateOrderStatus);
prepareFood(generateInvoice);
/* 
Output:
Preparing food
food is ready, notification sent to customer
Preparing food
SMS sent to customer
Preparing food
Order Status changed to ready
Preparing food
Invoice generated
 */