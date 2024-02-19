import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useQuery } from "../context/QueryContext";
import {
  filterProducts,
  searchProducts,
  createQueryObject,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";

import Card from "../components/Card";

import topSection from "../assets/top-section.png";
import brands from "../assets/brands.png";
import Loader from "../components/Loader";

import chevronIcon from "../assets/chevronRight.svg";

// styles
const ulStyle = "border-x border-b rounded overflow-hidden";
const liStyle =
  "flex items-center justify-between border-t text-sm md:text-base font-medium px-4 md:px-5 py-2.5 md:py-4 cursor-pointer";

function ProductsPage() {
  const { products } = useProducts();
  const { query, setQuery } = useQuery();
  const [displayed, setDisplayed] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <>
      <div className="grid place-items-center mb-5 md:mb-10">
        <img src={topSection} alt="section" className="w-full" />
        <img
          src={brands}
          alt="brands"
          className="relative -top-3 md:-top-5 lg:-top-7 xl:-top-12 scale-90 xl:scale-[0.8] rounded-lg"
        />
      </div>

      <div className="container mx-auto px-5 ">
        <div className="flex flex-col md:flex-row items-start justify-between gap-x-10 gap-y-8">
          {/* sidebar */}
          <div className="w-full md:w-96 xl:w-full xl:max-w-sm text-[#000C22] md:sticky md:top-[200px] xl:top-[215px]">
            <ul className={ulStyle} onClick={categoryHandler}>
              <li className={liStyle}>
                All
                <img src={chevronIcon} alt="chevron" />
              </li>
              <li className={liStyle}>
                ELECTRONICS
                <img src={chevronIcon} alt="chevron" />
              </li>
              <li className={liStyle}>
                JEWELERY
                <img src={chevronIcon} alt="chevron" />
              </li>
              <li className={liStyle}>
                MEN'S CLOTHING
                <img src={chevronIcon} alt="chevron" />
              </li>
              <li className={liStyle}>
                WOMEN'S CLOTHING
                <img src={chevronIcon} alt="chevron" />
              </li>
            </ul>
          </div>

          {/* products */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 border-l rounded overflow-hidden">
            {!displayed.length && <Loader />}
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
