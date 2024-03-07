import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import EmptyBasket from "../components/EmptyBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";

// icons
import arrow from "../assets/arrowRight.svg";

// styles
const containerStyle =
  "container mx-auto px-4 text-[#000C22] font-medium mt-8 md:mt-[42px] lg:mt-10";
const breadcrumbsDivStyle =
  "flex items-center flex-wrap text-xs gap-2 mb-5 md:mb-6 lg:text-sm";
const counterStyle =
  "bg-[#EEE9DC] text-[#491E4B] rounded-full text-xs lg:text-sm font-medium px-[5px] lg:px-1.5 text-center";
const mainDivStyle =
  "flex flex-col md:flex-row items-start justify-between gap-12";
const h2Style = "text-2xl md:text-3xl xl:text-4xl mb-6 md:mb-8";
const tableStyle = "w-full text-left";
const trStyle = "text-xs lg:text-sm opacity-50";
const thStyle = "pb-2 font-medium";

function CheckoutPage() {
  useTitle("Cart");
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) return <EmptyBasket />;

  return (
    <div className={containerStyle}>
      <div className={breadcrumbsDivStyle}>
        <Link to="/products">SHOP</Link>
        <img src={arrow} alt="arrow" />
        <Link to="/checkout" className="opacity-50">
          CART
        </Link>
        {!!state.itemsCounter && (
          <span className={counterStyle}>{state.itemsCounter}</span>
        )}
      </div>

      <div className={mainDivStyle}>
        <div className="w-full">
          <h2 className={h2Style}>SHOPPING CART</h2>
          <table className={tableStyle}>
            <thead>
              <tr className={trStyle}>
                <th className={thStyle}>PRODUCT</th>
                <th className={thStyle}>AMOUNT</th>
                <th className={`${thStyle} text-right`}>PRICE(USD)</th>
              </tr>
            </thead>
            <tbody>
              {state.selectedItems.map((product) => (
                <BasketCard key={product.id} data={product} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:sticky md:top-56">
          <BasketSidebar state={state} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
