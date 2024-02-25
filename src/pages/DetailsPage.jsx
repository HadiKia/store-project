import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductContext";
import Loader from "../components/Loader";
import DisclosureItem from "../components/Disclosure";
import { useCart } from "../context/CartContext";
import { productQuantity } from "../helpers/helper";

// icons
import arrow from "../assets/arrowRight.svg";
import bagIcon from "../assets/bag2.svg";
import calendarIcon from "../assets/calendar.svg";
import delivery from "../assets/delivery.png";
import shipped from "../assets/shipped.png";
import trashIcon from "../assets/trash.svg";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";

// styles
const containerStyle =
  "container mx-auto px-4 text-[#000C22] font-medium mt-8 md:mt-10";
const breadcrumbsDivStyle =
  "flex items-center flex-wrap text-xs gap-2 mb-2 md:mb-10 lg:text-sm";
const mainDivStyle = "flex flex-col md:flex-row items-start justify-between";
const imgDivStyle =
  "p-5 w-full md:w-fit lg:w-full lg:max-w-xl grid place-items-center mb-2";
const categoryStyle = "opacity-50 text-xs mb-1 lg:text-sm";
const titleStyle = "text-lg mb-5 md:mb-1 font-semibold md:text-xl lg:text-3xl";
const priceStyle = "md:mb-11 lg:text-xl";
const addCartBoxStyle =
  "fixed left-0 right-0 bottom-0 bg-white px-4 md:px-0 py-3 shadow-[0_-20px_20px_rgba(0,0,0,0.06)] md:shadow-none z-10 md:relative flex items-center justify-between md:flex-col md:items-start md:mb-1";
const addCartButtonStyle =
  "flex items-center justify-center gap-x-2 bg-[#491E4B] text-[#EEE9DC] px-5 py-3 rounded-md text-sm md:w-full md:rounded-full ";
const bagIconStyle = "scale-90 md:scale-100";
const subscribeStyle =
  "flex items-center gap-x-2 justify-center text-[10px] whitespace-nowrap opacity-50 font-semibold mb-6 md:text-xs lg:mb-9";
const uspStyle = "flex items-center justify-center gap-x-4 mb-5 md:mb-10";
const uspItemStyle =
  "flex items-center gap-x-1 text-xs md:gap-x-2 lg:text-base";
const uspImageStyle = "w-9 md:w-fit";

function DetailsPage() {
  const { id } = useParams();
  const data = useProductDetails(+id);

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, data.id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  if (!data) return <Loader />;

  return (
    <div className={containerStyle}>
      <div className={breadcrumbsDivStyle}>
        <Link to="/products">SHOP</Link>
        <img src={arrow} alt="arrow" />
        <Link to={`/products?category=${data.category}`}>
          {data.category.toUpperCase()}
        </Link>
        <img src={arrow} alt="arrow" />
        <span className="opacity-50 leading-5">{data.title.toUpperCase()}</span>
      </div>

      <div className={mainDivStyle}>
        <div className={imgDivStyle}>
          <img
            src={data.image}
            alt={data.title}
            className="h-80 lg:w-full lg:h-fit"
          />
        </div>

        <div className="md:w-96 xl:w-full xl:max-w-md md:sticky md:top-56">
          <p className={categoryStyle}>{data.category.toUpperCase()}</p>
          <h2 className={titleStyle}>{data.title.toUpperCase()}</h2>

          <div className={addCartBoxStyle}>
            <p className={priceStyle}>{data.price} $</p>

            <div className="md:w-full flex items-center gap-x-5 md:justify-center md:gap-x-6">
              {quantity === 1 && (
                <button onClick={() => clickHandler("REMOVE_ITEM")}>
                  <img
                    src={trashIcon}
                    alt="delete"
                    className="w-6 opacity-15"
                  />
                </button>
              )}
              {quantity > 1 && (
                <button onClick={() => clickHandler("DECREASE")}>
                  <img src={minusIcon} alt="-" className="my-[7px]" />
                </button>
              )}
              {!!quantity && <span>{quantity}</span>}
              {quantity === 0 ? (
                <button
                  className={addCartButtonStyle}
                  onClick={() => clickHandler("ADD_ITEM")}
                >
                  <img src={bagIcon} alt="bag" className={bagIconStyle} />
                  ADD TO CART
                </button>
              ) : (
                <button onClick={() => clickHandler("INCREASE")}>
                  <img src={plusIcon} alt="+" className="my-[7px]" />
                </button>
              )}
            </div>
          </div>

          <div className={subscribeStyle}>
            <img src={calendarIcon} alt="calendar" />
            <span>WILL YOU RESEND IT ON THE SELECTED DATE?</span>
          </div>

          <div className={uspStyle}>
            <div className={uspItemStyle}>
              <img src={delivery} alt="delivery" className={uspImageStyle} />
              <p>DELIVERY UP TO 150 HOURS</p>
            </div>
            <div className={uspItemStyle}>
              <img src={shipped} alt="shipped" className={uspImageStyle} />
              <p>FREE SHIPPING AND RETURNS</p>
            </div>
          </div>

          <div>
            <DisclosureItem
              title="Product description"
              description={data.description}
            />
            <DisclosureItem
              title="Delivery"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim distinctio voluptatem ipsa. Nemo, vero!"
            />
            <DisclosureItem
              title="Returns and Complaints"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim distinctio voluptatem ipsa. Nemo, vero!"
              isLastItem={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
