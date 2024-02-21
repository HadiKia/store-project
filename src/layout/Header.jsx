import { useEffect, useState } from "react";
import { useQuery } from "../context/QueryContext";
import { createQueryObject } from "../helpers/helper";
import MobileMenu from "../components/MobileMenu";

import { Link } from "react-router-dom";

import saleBanner from "../assets/sale-banner.png";
import saleBanner2 from "../assets/sale-banner-mobile.png";
import bagIcon from "../assets/bag.svg";
import chevron from "../assets/chevronDown.svg";
import searchIcon from "../assets/search.svg";

// styles
const topBarStyle = "flex items-center justify-between py-2 lg:py-3";
const topBarCategoryStyle =
  "flex-1 hidden md:flex items-center gap-x-2 text-[10px] text-[#000C22] font-medium md:text-base md:gap-x-5";
const categoryItemStyle =
  "opacity-40 hover:opacity-100 duration-300 cursor-pointer";
const topBarTitleStyle = "text-[#000C22] text-2xl lg:text-3xl font-bold";
const cartLinkStyle =
  "bg-[#F2F2F2] grid place-items-center w-[46px] h-[46px] rounded-full";
const linkDivStyle = "hidden md:flex items-center gap-x-3 lg:gap-x-7";
const linkStyle = "hover:text-[#491E4B] duration-300 cursor-pointer pt-3 pb-6";

function Header() {
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
    <div className="sticky top-0 bg-white z-10 shadow-xl shadow-[#00000010]">
      <Link to="/products">
        <img src={saleBanner} alt="banner" className="hidden lg:block w-full" />
      </Link>
      <Link to="/products">
        <img src={saleBanner2} alt="banner" className="lg:hidden w-full" />
      </Link>

      <div className="container mx-auto px-4 ">
        <div className={topBarStyle}>
          <div className={topBarCategoryStyle}>
            <span className={categoryItemStyle}>WOMAN</span>
            <span className={categoryItemStyle}>MAN</span>
            <span className={categoryItemStyle}>KIDS</span>
          </div>

          <h1 className={topBarTitleStyle}>BESART</h1>

          <div className="flex-1 flex justify-end gap-x-2">
            <Link to="/checkout" className={cartLinkStyle}>
              <img src={bagIcon} />
            </Link>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:gap-x-3 lg:gap-x-10 text-[#000C22] font-medium text-sm xl:text-lg">
          <div className="flex-1 pt-3 md:pt-0 mb-4">
            <form
              onSubmit={searchHandler}
              className="bg-[#F2F2F2] max-w-[390px] py-3 rounded-lg px-4 flex items-center gap-x-3 xl:gap-x-3.5"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
                placeholder="Search"
                className="bg-transparent w-full outline-none placeholder:font-medium font-normal"
              />
              <button type="submit">
                <img
                  src={searchIcon}
                  alt="search"
                  className="scale-110 md:scale-125"
                />
              </button>
            </form>
          </div>

          <div className={linkDivStyle}>
            <Link to="/products" className={linkStyle}>
              SHOP
            </Link>
            <Link to="/help-center" className={linkStyle}>
              HELP CENTER
            </Link>
            <Link to="contact-us" className={linkStyle}>
              CONTACT US
            </Link>
            <Link to="/privacy-policy" className={linkStyle}>
              PRIVACY POLICY
            </Link>
          </div>

          <div className="flex-1 hidden md:flex justify-end items-center pt-3 pb-6">
            <div className="flex items-center gap-x-1 lg:gap-x-2 pr-2 lg:pr-5 border-r border-[#E5E5E5]">
              <span>USD</span>
              <img src={chevron} alt="chevron" />
            </div>
            <div className="flex items-center gap-x-1 lg:gap-x-2 pl-2 lg:pl-5">
              <span>INFO</span>
              <img src={chevron} alt="chevron" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
