type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
};

type ProductCardProps = {
  product: Product;
  // callback function
  onAddToCart: (productId: number) => void;
};

function Child(props: ProductCardProps) {
  // Child to parent
  function addToCart() {
    props.onAddToCart(props.product.id);
  }

  return (
    <div style={{ border: "1px solid gray", padding: "20px", width: "250px" }}>
      <h2>{props.product.name}</h2>
      <p>Brand: {props.product.brand}</p>
      <p>Price: Rs. {props.product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Child;
