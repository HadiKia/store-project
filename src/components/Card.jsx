import { Link } from "react-router-dom";
import { shortenText, capitalizeFirstLetter } from "../helpers/helper";

function Card({ data }) {
  const { id, image, category, title, price } = data;

  return (
    <Link to={`/products/${id}`} key={id} className="w-full flex flex-col items-start justify-between text-[#000C22] px-2 py-3 md:px-4 md:py-5 lg:px-5 xl:px-6 border overflow-hidden">
        <div className="w-full grid place-items-center p-2 xl:p-4">
          <img src={image} alt={title} className="w-full h-40 md:h-56 xl:h-64 2xl:w-[200px] mb-5"/>
        </div>

        <h3 className="font-medium text-sm md:text-lg xl:text-xl mb-2 xl:mb-3">{shortenText(title)}...</h3>

        <div className="w-full flex items-center justify-between">
          <span className="text-xs md:text-sm  opacity-50">{capitalizeFirstLetter(category)}</span>
          <span className="font-medium text-sm md:text-lg xl:text-xl">{price}$</span>
        </div>
    </Link>
  );
}

export default Card;
