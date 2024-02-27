import { Link } from "react-router-dom";
import emptyImg from "../assets/empty-cart.png";

const containerStyle =
  "container mx-auto px-4 flex flex-col items-center font-medium";
const imgStyle = "max-w-[350px]";
const h3Style = "text-[#000C22] text-xl md:text-2xl mb-3.5 md:mb-4";
const linkStyle =
  "bg-[#491E4B] text-[#EEE9DC] px-7 py-2 rounded-full mb-5 text-sm md:text-base 2xl:mb-44";

function EmptyBasket() {
  return (
    <div className={containerStyle}>
      <img src={emptyImg} alt="empty" className={imgStyle} />
      <h3 className={h3Style}>YOUR CART IS EMPTY</h3>
      <Link to="/products" className={linkStyle}>
        BACK TO SHOP
      </Link>
    </div>
  );
}

export default EmptyBasket;
