import ProductCard from "./ProductCard.jsx";
import vehicles from "../data/vehicles.js";

function ProductGrid() {
  return (
    <section className="vehicles-section" id="vehicles">
      <div className="section-heading">
        <p className="eyebrow">OUR VEHICLES</p>
        <h2>Choose your electric car</h2>
      </div>

      <div className="product-grid">
        {vehicles.map((vehicle) => (
          <ProductCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
