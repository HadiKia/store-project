import { useProducts } from "../context/ProductContext";

import topSection from "../assets/top-section.png";
import brands from "../assets/brands.png";

function ProductsPage() {
  const products = useProducts();

  return (
    <>
      <div className="grid place-items-center">
        <img src={topSection} alt="section" className="w-full" />
        <img
          src={brands}
          alt="brands"
          className="relative -top-3 md:-top-5 lg:-top-7 xl:-top-12 scale-90 xl:scale-[0.8] rounded-lg"
        />
      </div>

      <div className="container mx-auto px-5 ">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* sidebar */}
          <div>sidebar Lorem, ipsum dolor sit amet consectetur</div>

          {/* products */}
          <div>
            {!products.length && <p>Loading...</p>}
            {products.map((product) => (
              <div key={product.id}>
                <img src={product.image} alt="" />
                <span>{product.category}</span>
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
