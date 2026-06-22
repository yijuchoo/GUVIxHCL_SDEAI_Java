

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="card">
      <img src= {image} className="product-image" />
      <h3>{name}</h3>
      <p className="price">RS. {price}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
