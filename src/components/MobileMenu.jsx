import { useState } from "react";
import { Link } from "react-router-dom";

import chevron from "../assets/chevronDown.svg";
import { pages } from "../constants/list";

// Styles
const bgMenu =
  "absolute inset-0 min-h-screen bg-black bg-opacity-60 backdrop-blur-sm z-10";
const ulStyle =
  "absolute inset-0 w-[15em] min-h-screen z-10 duration-500 flex flex-col gap-y-2 bg-white overflow-hidden text-[#000C22]";
const ulOpen = `${ulStyle} translate-x-0`;
const ulClose = `${ulStyle} -translate-x-full`;
const h2Style = "font-bold text-2xl px-4 py-5 border-b bg-[#491E4B] text-white";
const liStyle =
  "flex items-center justify-between px-4 py-2 text-sm font-medium";
const liActiveStyle = `${liStyle} text-[#491E4B] `;
const chevronStyle = "-rotate-90";
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

      <ul className={menu ? ulOpen : ulClose}>
        <h2 className={h2Style}>BESART</h2>
        {pages.map((item) => (
          <Li key={item.id} data={item} openMenu={openMenu} />
        ))}
        <span className="absolute left-8 bottom-5 text-xs mx-auto opacity-50">
          Developed by Hadi Kia with ❤️
        </span>
      </ul>
    </>
  );
}

export default MobileMenu;

function Li({ data, openMenu }) {
  const { url, type } = data;
  return (
    <li onClick={openMenu}>
      <Link
        to={url}
        className={
          window.location.href === `http://localhost:5173/${url}`
            ? liActiveStyle
            : liStyle
        }
      >
        <span>{type}</span>
        <img src={chevron} alt="chevron" className={chevronStyle} />
      </Link>
    </li>
  );
}
