import { useQuery } from "../context/QueryContext";
import { createQueryObject } from "../helpers/helper";
import { categories } from "../constants/list";

import chevronIcon from "../assets/chevronRight.svg";

// styles
const ulStyle = "border-x border-b rounded overflow-hidden";
const liStyle =
  "flex items-center justify-between border-t text-sm md:text-base font-medium px-4 md:px-5 py-2.5 md:py-4 cursor-pointer duration-300";
const selectedStyle = `${liStyle} bg-[#EEE9DC]`;

function Sidebar() {
  const { query, setQuery } = useQuery();

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="w-full md:w-96 xl:w-full xl:max-w-xs text-[#000C22] md:sticky md:top-[200px] lg:top-[180px] xl:top-[200px] 2xl:top-[220px]">
      <ul className={ulStyle} onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? selectedStyle
                : liStyle
            }
          >
            {item.type}
            <img src={chevronIcon} alt="chevron" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
