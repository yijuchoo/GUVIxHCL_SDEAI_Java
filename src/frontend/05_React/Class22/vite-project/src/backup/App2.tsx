// map method
// using type-strict method

type Product = {
  id: number;
  name: string;
  price: number;
};

type Course = {
  title: string;
  completed: boolean;
};

function App() {
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  // array of courses -> to verify all the modules are completed or not
  const courses: Course[] = [
    { title: "HTML", completed: true },
    { title: "CSS", completed: true },
    { title: "React", completed: false },
  ];

  const allCompleted = courses.every((course) => course.completed);

  return (
    <>
      <h2>Products are:</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
      <div>
        {allCompleted
          ? "Congrats! Certification unlocked"
          : "Please complete the remaining training"}
      </div>
    </>
  );
}

export default App;

// key prop is going to provide the unique key to each item in the given array
// when we do any manipulation, adding, deleting... key prop