import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useQuery } from "../context/QueryContext";
import { useSearchParams } from "react-router-dom";

import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Loader from "../components/Loader";

import {
  filterProducts,
  searchProducts,
  getInitialQuery,
} from "../helpers/helper";

import topSection from "../assets/top-section.png";
import brands from "../assets/brands.png";
import notFoundImage from "../assets/error_404.jpeg";

function ProductsPage() {
  const { products } = useProducts();
  const { query, setQuery } = useQuery();
  const [displayed, setDisplayed] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <div className="grid place-items-center mb-2 ">
        <img src={topSection} alt="section" className="w-full" />
        <img
          src={brands}
          alt="brands"
          className="relative -top-3 md:-top-5 lg:-top-7 xl:-top-12 scale-90 xl:scale-[0.8] rounded-lg"
        />
      </div>

      <div className="container mx-auto px-5 ">
        {/* search */}
        <div className="md:hidden mb-6">
          <Search />
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-x-10 lg:gap-x-12 gap-y-8">
          {/* sidebar */}
          <Sidebar />

          {/* products */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 border-l rounded overflow-hidden">
            {!displayed.length && !query.search && <Loader />}
            {!displayed.length && query.search && (
              <div className=" py-10 border-y border-r w-full col-span-full grid place-items-center">
                <img src={notFoundImage} alt="Not found" />
              </div>
            )}

            {displayed.map((product) => (
              <Card key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
