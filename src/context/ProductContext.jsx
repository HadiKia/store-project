import { createContext, useState, useEffect, useContext } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, query, setQuery }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const { products, query, setQuery } = useContext(ProductContext);
  return { products, query, setQuery };
};

export default ProductProvider;
export { useProducts };
