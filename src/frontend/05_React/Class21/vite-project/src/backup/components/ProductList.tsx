import "./Product.css";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  price: number;
  image: string;
}

function ProductList() {
  // like API response
  const products: Product[] = [
    {
      name: "iPhone 15 Pro",
      price: 7999,
      image: "https://m.media-amazon.com/images/I/61vNxSF6qeL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "AC",
      price: 17999,
      image: "https://m.media-amazon.com/images/I/51N2AcB3BQL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "iPhone 15 Pro",
      price: 7999,
      image: "https://m.media-amazon.com/images/I/61vNxSF6qeL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "AC",
      price: 17999,
      image: "https://m.media-amazon.com/images/I/51N2AcB3BQL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "iPhone 15 Pro",
      price: 7999,
      image: "https://m.media-amazon.com/images/I/61vNxSF6qeL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "AC",
      price: 17999,
      image: "https://m.media-amazon.com/images/I/51N2AcB3BQL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ];

  return (
    <>
      <div className="container">
        <h2>Product List Page</h2>

        <div className="flex-container">
          {products.map((product) => (
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
