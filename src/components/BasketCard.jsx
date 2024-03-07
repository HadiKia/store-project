import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { capitalizeFirstLetter, shortenText } from "../helpers/helper";

// icons
import trashIcon from "../assets/trash.svg";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";

// styles
const containerStyle = "border-t";
const productDivStyle = "flex items-center gap-x-3 md:gap-x-4 xl:gap-x-5";
const imageStyle = "w-12 md:w-16 lg:w-[120px] lg:h-[122px]";
const titleStyle = "text-sm md:text-base lg:text-xl mb-1";
const categoryStyle = "text-[10px] md:text-xs opacity-50 lg:text-sm";
const actionsDivStyle = "flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4";
const iconStyle = "w-6 lg:w-fit";
const trashStyle = `${iconStyle} opacity-15 lg:w-7`;
const priceStyle =
  "text-sm md:text-base lg:text-xl flex items-center justify-end gap-x-1";
const currencyStyle = "text-xs md:text-sm opacity-50 ";

function BasketCard({ data }) {
  const { image, title, category, quantity, price } = data;

  const dispatch = useDispatch();

  return (
    <tr className={containerStyle}>
      <td className="py-4">
        <div className={productDivStyle}>
          <img src={image} alt={title} className={imageStyle} />
          <div>
            <p className={titleStyle}>{shortenText(title)}</p>
            <p className={categoryStyle}>{capitalizeFirstLetter(category)}</p>
          </div>
        </div>
      </td>

      <td>
        <div className={actionsDivStyle}>
          {quantity > 1 ? (
            <button onClick={() => dispatch(decrease(data))}>
              <img src={minusIcon} alt="+" className={iconStyle} />
            </button>
          ) : (
            <button onClick={() => dispatch(removeItem(data))}>
              <img src={trashIcon} alt="delete" className={trashStyle} />
            </button>
          )}
          <span>{quantity}</span>
          <button onClick={() => dispatch(increase(data))}>
            <img src={plusIcon} alt="+" className={iconStyle} />
          </button>
        </div>
      </td>

      <td>
        <p className={priceStyle}>
          {price}
          <span className={currencyStyle}>$</span>
        </p>
      </td>
    </tr>
  );
}

export default BasketCard;
