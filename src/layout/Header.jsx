import { useState } from "react";
import { Link } from "react-router-dom";

import saleBanner from "../assets/sale-banner.png";
import saleBanner2 from "../assets/sale-banner-mobile.png";
import bagIcon from "../assets/bag.svg";
import chevron from "../assets/chevronDown.svg";

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
  return (
    <div className="sticky top-0 bg-white z-10">
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

        <div className="flex items-center justify-between text-[#000C22] font-medium text-sm xl:text-lg">
          <div className="flex-1 pt-3 pb-6">search</div>

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

// Styles
const bgMenu =
  "absolute inset-0 min-h-screen  bg-black bg-opacity-60 backdrop-blur-sm";
const ulStyle =
  "absolute  inset-0 w-[15em] min-h-screen  duration-500 flex flex-col gap-y-2 bg-white overflow-hidden text-[#000C22]";
const liStyle = "flex items-center justify-between px-4 py-2 text-sm  ";
const liActiveStyle = `${liStyle} text-[#491E4B] font-semibold`;
const hamburgerBoxStyle =
  "bg-[#F2F2F2] w-[46px] h-[46px] flex flex-col items-center justify-center gap-y-1.5 rounded-full";
const hamburgerStyle = "w-[22px] h-0.5 bg-[#000C22] rounded-xl";

function MobileMenu() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div onClick={openMenu} className={hamburgerBoxStyle}>
        <div className={hamburgerStyle}></div>
        <div className={hamburgerStyle}></div>
        <div className={hamburgerStyle}></div>
      </div>

      <div onClick={openMenu} className={menu ? bgMenu : "hidden"}></div>

      <ul
        className={
          menu ? `${ulStyle} translate-x-0` : `${ulStyle} -translate-x-full `
        }
      >
        <h2 className="font-bold text-2xl px-4 pt-5 pb-4 border-b">BESART</h2>
        <li
          onClick={openMenu}
          className={
            window.location.href === "http://localhost:5173/products"
              ? liActiveStyle
              : liStyle
          }
        >
          <Link to="/products">SHOP</Link>
          <img src={chevron} alt="chevron" className="-rotate-90" />
        </li>

        <li
          onClick={openMenu}
          className={
            window.location.href === "http://localhost:5173/help-center"
              ? liActiveStyle
              : liStyle
          }
        >
          <Link to="/help-center">HELP CENTER</Link>
          <img src={chevron} alt="chevron" className="-rotate-90" />
        </li>

        <li
          onClick={openMenu}
          className={
            window.location.href === "http://localhost:5173/contact-us"
              ? liActiveStyle
              : liStyle
          }
        >
          <Link to="contact-us">CONTACT US</Link>
          <img src={chevron} alt="chevron" className="-rotate-90" />
        </li>

        <li
          onClick={openMenu}
          className={
            window.location.href === "http://localhost:5173/privacy-policy"
              ? liActiveStyle
              : liStyle
          }
        >
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
          <img src={chevron} alt="chevron" className="-rotate-90" />
        </li>
        <span className="absolute left-8 bottom-5 text-xs mx-auto opacity-50">
          Developed by Hadi Kia with ❤️
        </span>
      </ul>
    </>
  );
}