// map() -> used to transform each item and return the new array

function App() {
  const products: string[] = ["Laptop", "Mobile", "Deaktop"];

  const prices: number[] = [1000, 2000, 3000];

  const discountedPrice = prices.map((price) => price * 0.9);

  const students = [
    { id: 1, name: "Venkat", active: true },
    { id: 2, name: "RAM", active: true },
    { id: 3, name: "Shyam", active: false },
  ];

  // I want to filter the active students
  const activeStudents = students.filter(
    (student) => student.active
  );

  return (
    <div>
      {/* Ex 1 */}
      <h1>Products are:</h1>
      {products.map((product) => (
        <p>{product}</p>
      ))}

      {/* Ex 2 */}
      <h1>Discounted Prices are:</h1>
      {discountedPrice.map((price) => (
        <p>Rs. {price}</p>
      ))}

      {/* Ex 3 */}
      <h1>Active Students are:</h1>
      {activeStudents.map((activeStudent) => (
        <p>{activeStudent.name}</p>
      ))}
    </div>
  );
}

export default App;
