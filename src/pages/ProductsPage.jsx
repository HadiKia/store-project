import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useQuery } from "../context/QueryContext";

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

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    console.log(query);
  }, [query]);

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category }));
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
          <div className="w-full md:w-80 xl:w-96 text-[#000C22] md:sticky top-[210px]">
            <ul className={ulStyle} onClick={categoryHandler}>
              <li className={liStyle}>
                ALL
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
                WOMAN'S CLOTHING
                <img src={chevronIcon} alt="chevron" />
              </li>
            </ul>
          </div>

          {/* products */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 border-l border-t rounded overflow-hidden">
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
