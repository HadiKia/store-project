import sslIcon from "../assets/ssl.svg";

// styles
const mainStyle = "bg-[#EEE9DC] rounded-lg md:rounded-xl px-5 py-6";
const h3Style =
  "text-2xl md:text-3xl border-b border-[#000D21] border-opacity-10 mb-5 md:mb-6 pb-0.5 md:pb-1 font-semibold";
const deliveryAndQuantityStyle =
  "flex items-center justify-between mb-1.5 md:mb-2.5";
const statusStyle =
  "flex items-center justify-between pb-2 mb-5 md:mb-7 border-b border-[#000D21] border-opacity-10";
const totalStyle =
  "text-2xl md:text-3xl text-right mb-5 md:mb-10 font-semibold";
const buttonStyle =
  "w-full rounded-full bg-[#491E4B] text-[#EEE9DC] py-2.5 md:py-3.5 mb-5";
const sslStyle = "flex items-center justify-center gap-x-2.5";

function BasketSidebar({ state, clickHandler }) {
  return (
    <div className={mainStyle}>
      <h3 className={h3Style}>TOTAL</h3>

      <div className={deliveryAndQuantityStyle}>
        <span>DELIVERY 3-4 B.D</span>
        <span>FREE</span>
      </div>

      <div className={deliveryAndQuantityStyle}>
        <span>QUANTITY</span>
        <span>{state.itemsCounter}</span>
      </div>

      <div className={statusStyle}>
        <span>STATUS</span>
        <span>{!state.checkout && "PENDING"}</span>
      </div>

      <p className={totalStyle}>{state.total} $</p>

      <button onClick={() => clickHandler("CHECKOUT")} className={buttonStyle}>
        CHECKOUT
      </button>

      <div className={sslStyle}>
        <img src={sslIcon} alt="ssl " />
        <span>PAYMENT SECURITY SSL</span>
      </div>
    </div>
  );
}

export default BasketSidebar;
