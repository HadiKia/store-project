import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const useProductDetails = (id) => {
  const { products } = useContext(ProductContext);
  const result = products.find((product) => product.id === id);
  return result;
};

export { useProductDetails };
