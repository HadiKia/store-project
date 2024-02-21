import { useQuery } from "../context/QueryContext";
import { createQueryObject } from "../helpers/helper";
import chevronIcon from "../assets/chevronRight.svg";

// styles
const ulStyle = "border-x border-b rounded overflow-hidden";
const liStyle =
  "flex items-center justify-between border-t text-sm md:text-base font-medium px-4 md:px-5 py-2.5 md:py-4 cursor-pointer";

function Sidebar() {
  const { setQuery } = useQuery();

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
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
  );
}

export default Sidebar;
