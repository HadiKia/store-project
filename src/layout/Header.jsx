import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { pages } from "../constants/list";

import MobileMenu from "../components/MobileMenu";

import saleBanner from "../assets/sale-banner.png";
import saleBanner2 from "../assets/sale-banner-mobile.png";
import bagIcon from "../assets/bag.svg";
import chevron from "../assets/chevronDown.svg";
import Search from "../components/Search";

// styles
const mainStyle = "sticky top-0 bg-white z-20 shadow-xl shadow-[#00000008]";
const topBarStyle = "flex items-center justify-between py-2 lg:py-3";
const topBarCategoryStyle =
  "flex-1 hidden md:flex items-center gap-x-2 text-[10px] text-[#000C22] font-medium md:text-base md:gap-x-5";
const categoryItemStyle =
  "opacity-40 hover:opacity-100 duration-300 cursor-pointer";
const topBarTitleStyle = "text-[#000C22] text-2xl lg:text-3xl font-bold";
const cartLinkStyle =
  "relative bg-[#F2F2F2] grid place-items-center w-[46px] h-[46px] rounded-full";
const counterStyle =
  "absolute top-2.5 right-2 md:right-1.5 bg-[#491E4B] text-white rounded-full text-[10px] md:text-xs font-medium px-[5px] text-center";
const sectionStyle =
  "flex items-center justify-between md:gap-x-3 lg:gap-x-10 text-[#000C22] font-medium text-sm xl:text-lg";
const linkDivStyle = "hidden md:flex items-center gap-x-3 lg:gap-x-7";
const linkStyle = "hover:text-[#491E4B] duration-300 cursor-pointer pt-3 pb-6";
const InfoAndCurrencyBoxStyle =
  "flex-1 hidden md:flex justify-end items-center pt-3 pb-6";
const currencyStyle =
  "flex items-center gap-x-1 lg:gap-x-2 pr-2 lg:pr-5 border-r border-[#E5E5E5]";
const infoStyle = "flex items-center gap-x-1 lg:gap-x-2 pl-2 lg:pl-5";

function Header() {
  const state = useSelector((store) => store.cart);

  return (
    <header className={mainStyle}>
      <Link to="/products">
        <img src={saleBanner} alt="banner" className="hidden lg:block w-full" />
      </Link>
      <Link to="/products">
        <img src={saleBanner2} alt="banner" className="lg:hidden w-full" />
      </Link>

      <div className="container mx-auto px-4">
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
              {!!state.itemsCounter && (
                <span className={counterStyle}>{state.itemsCounter}</span>
              )}
            </Link>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>

        <div className={sectionStyle}>
          <div className="flex-1 hidden md:block pt-3 md:pt-0 mb-4">
            <Search />
          </div>

          <div className={linkDivStyle}>
            {pages.map((item) => (
              <LinkComponent key={item.id} data={item} />
            ))}
          </div>

          <div className={InfoAndCurrencyBoxStyle}>
            <div className={currencyStyle}>
              <span>USD</span>
              <img src={chevron} alt="chevron" />
            </div>
            <div className={infoStyle}>
              <span>INFO</span>
              <img src={chevron} alt="chevron" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

function LinkComponent({ data }) {
  return (
    <Link to={data.url} className={linkStyle}>
      {data.type}
    </Link>
  );
}
