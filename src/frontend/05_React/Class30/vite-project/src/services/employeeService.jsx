// API call will present here, all the component will call this service

export async function getEmployees() {
  // Call API
  const response = await fetch("https://dummyjson.com/users");

  // Convert the response to JSON
  const data = await response.json();

  // return the employee array
  return data.users;
}
