import { useContext } from "react";
import { QueryContext } from "../context/QueryContext";

const useQuery = () => {
  const { query, setQuery } = useContext(QueryContext);
  return { query, setQuery };
};

export { useQuery };
