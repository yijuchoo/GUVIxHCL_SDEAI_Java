import { useSearchParams } from "react-router-dom";

function ProductFilter() {
  // read and update the query parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // read the category from the URL
  const category = searchParams.get("category");

  // function to select the category
  function selectCategory(type) {
    // update URL
    setSearchParams({
      category: type,
    });
  }

  return (
    <>
      <h2>Product Filter</h2>
      <button onClick={() => selectCategory("Laptop")}>Laptop</button>
      <button onClick={() => selectCategory("AC")}>AC</button>
      <button onClick={() => selectCategory("Washing Machine")}>
        Washing Machine
      </button>

      <h3>Selected Category:</h3>
      <h2>{category || "No category selected"}</h2>
    </>
  );
}

export default ProductFilter;
