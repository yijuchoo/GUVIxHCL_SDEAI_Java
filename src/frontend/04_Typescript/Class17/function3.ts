// Example 1
// login validation
function login(username: string, password: string): boolean {
  if (username === "admin" && password === "welcome123") {
    return true;
  }
  return false;
}
console.log(login("admin", "welcome123"));
// true

// Example 2
// Calculate the final product after the discount
function calculateDiscount(price: number, discountPercentage: number): number {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}

const finalPrice = calculateDiscount(50000, 10);
console.log(finalPrice);
// 45000

// Example 3
// API response function
interface User {
  id: number;
  name: string;
}

function getUSerResponse(user: User): Object {
  return {
    success: true,
    data: user,
    message: "User fetched successfully",
  };
}
console.log(
  getUSerResponse({
    id: 1,
    name: "Ram",
  }),
);
/* 
Output:
{
  success: true,
  data: { id: 1, name: 'Ram' },
  message: 'User fetched successfully'
}
 */

// Example 4
type Role = "ADMIN" | "USER";
function hasAccess(role: Role): boolean {
    return role === "ADMIN";
}
console.log(hasAccess("ADMIN"));
// true
console.log(hasAccess("USER"));
// false