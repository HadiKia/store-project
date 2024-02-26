import { useEffect, useState } from "react";
import { useQuery } from "../context/QueryContext";
import { createQueryObject } from "../helpers/helper";

import searchIcon from "../assets/search.svg";

// styles
const searchBoxStyle =
  "bg-[#F2F2F2] xl:max-w-[390px] py-3 rounded-lg px-4 flex items-center gap-x-3 xl:gap-x-3.5";
const inputStyle =
  "bg-transparent w-full outline-none placeholder:font-medium font-normal";

function Search() {
  const { query, setQuery } = useQuery();
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    setQuery((query) => createQueryObject(query, { search }));
  };

  useEffect(() => {
    setSearch(query.search || "");
  }, [query]);

  return (
    <form onSubmit={searchHandler} className={searchBoxStyle}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        placeholder="Search"
        className={inputStyle}
      />
      <button type="submit">
        <img src={searchIcon} alt="search" className="scale-110 md:scale-125" />
      </button>
    </form>
  );
}

export default Search;
