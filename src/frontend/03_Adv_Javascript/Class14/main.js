// Method 1
/* export function add(a, b) {
  return a + b;
}

export function substract(a, b) {
  return a - b;
}

export const firstName = "venkat";
export const lastName = "ram";
export const age = 20; */

// Method 2
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

const firstName = "venkat";
const lastName = "ram";
const age = 20;

const mobile = "iPhone";

// Export at the last
export { add, substract, firstName, lastName, age, mobile };
