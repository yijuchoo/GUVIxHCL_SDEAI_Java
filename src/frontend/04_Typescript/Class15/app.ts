// any -> can store any type of value
// Should not use "any" in real-life projects
// Example 1
let data: any = "hello";
data = 100;
data = true;
data = 10.5;
console.log(data);
// 10.5

// Example 2
let response: any;
response = {
  id: 1,
};
response = "success";
console.log(response);
// success

// Example 3
// unknown -> Safer version of any
let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
// HELLO

// Example 4
let apiData: unknown = "product is laptop";
if (typeof apiData === "string") {
  console.log(apiData.length);
}
// 17

// Example 5
// null -> represent the intentional empty value
let manager: null = null;
console.log(manager);
// null

// Example 6
// undefined -> represents a value that is not assigned
let address: undefined = undefined;
console.log(address);
// undefined

// Example 7
let deliveryData: undefined = undefined;
console.log(deliveryData);
// undefined

// Example 8
// object stores data in key-value pairs
let emp: object = {
  id: 1,
  name: "ram",
};
console.log(emp);
// { id: 1, name: 'ram' }

// Example 9
let product: object = {
  productId: 101,
  productName: "Laptop",
  price: 65000
};
console.log(product);
// { productId: 101, productName: 'Laptop', price: 65000 }


// ======================

// Example 10
// when use "unknown" instead of "any", 
// it will show compile error before running it
let userData: any = "venkat";
console.log(userData.toUpperCase());
// Output: VENKAT

// userData = 100;
// console.log(userData.toUppercase());
// Error
// TypeError: userData.toUppercase is not a function