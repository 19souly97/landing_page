// ProductCard receives one vehicle through a prop called "vehicle".
function ProductCard({ vehicle }) {
  return (
    <article className="product-card">
      <img src={vehicle.image} alt={vehicle.name} />

      <div className="product-card-content">
        <h3>{vehicle.name}</h3>
        <p>Starting at {vehicle.price}</p>
        <button type="button">Learn More</button>
      </div>
    </article>
  );
}

export default ProductCard;
