import { useState } from "react";
import { Link } from "react-router-dom";

import chevron from "../assets/chevronDown.svg";

// Styles
const bgMenu =
  "absolute inset-0 min-h-screen  bg-black bg-opacity-60 backdrop-blur-sm";
const ulStyle =
  "absolute inset-0 w-[15em] min-h-screen  duration-500 flex flex-col gap-y-2 bg-white overflow-hidden text-[#000C22]";
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
        <h2 className="font-bold text-2xl px-4 py-5 border-b bg-[#491E4B] text-white">
          BESART
        </h2>

        <li onClick={openMenu}>
          <Link
            to="/products"
            className={
              window.location.href === "http://localhost:5173/products"
                ? liActiveStyle
                : liStyle
            }
          >
            <span>SHOP</span>
            <img src={chevron} alt="chevron" className="-rotate-90" />
          </Link>
        </li>

        <li onClick={openMenu}>
          <Link
            to="/help-center"
            className={
              window.location.href === "http://localhost:5173/help-center"
                ? liActiveStyle
                : liStyle
            }
          >
            <span>HELP CENTER</span>
            <img src={chevron} alt="chevron" className="-rotate-90" />
          </Link>
        </li>

        <li onClick={openMenu}>
          <Link
            to="/contact-us"
            className={
              window.location.href === "http://localhost:5173/contact-us"
                ? liActiveStyle
                : liStyle
            }
          >
            <span>CONTACT US</span>
            <img src={chevron} alt="chevron" className="-rotate-90" />
          </Link>
        </li>

        <li onClick={openMenu}>
          <Link
            to="/privacy-policy"
            className={
              window.location.href === "http://localhost:5173/privacy-policy"
                ? liActiveStyle
                : liStyle
            }
          >
            <span>PRIVACY POLICY</span>
            <img src={chevron} alt="chevron" className="-rotate-90" />
          </Link>
        </li>

        <span className="absolute left-8 bottom-5 text-xs mx-auto opacity-50">
          Developed by Hadi Kia with ❤️
        </span>
      </ul>
    </>
  );
}

export default MobileMenu;
