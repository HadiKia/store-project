import { createContext, useState, useContext } from "react";

const QueryContext = createContext();

function QueryProvider({ children }) {
  const [query, setQuery] = useState({});

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
}

const useQuery = () => {
  const { query, setQuery } = useContext(QueryContext);
  return { query, setQuery };
};

export default QueryProvider;
export { useQuery };
