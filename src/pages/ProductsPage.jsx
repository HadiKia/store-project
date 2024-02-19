import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";

import topSection from "../assets/top-section.png";
import brands from "../assets/brands.png";
import Loader from "../components/Loader";

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
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* sidebar */}
          <div className="w-full md:w-fit">sidebar Lorem, sidebar Lorem, ipssdfsdfsfum dolor sit sdfdsfsf</div>

          {/* products */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 border-l border-t rounded overflow-hidden">
            {!products.length && <Loader />}
            {products.map((product) => (
             <Card key={product.id} data={product}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
