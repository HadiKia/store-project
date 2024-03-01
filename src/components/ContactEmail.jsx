import arrowIcon from "../assets/arrow.svg";

// styles
const emailBoxStyle =
  "bg-[#F2F2F3] flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-5 rounded-md text-xs font-medium leading-5 md:text-sm md:px-8 md:py-6 lg:py-8 lg:text-lg lg:px-10";
const emailBoxPStyle = "text-sm md:text-base lg:text-2xl";
const emailLinkStyle = "flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3";
const arrowStyle = "scale-[0.65] md:scale-75 lg:scale-95";

function ContactEmail() {
  return (
    <div className="pb-14 md:pb-20">
      <div className={emailBoxStyle}>
        <p className={emailBoxPStyle}>
          Do YOU HAVE AN URGENT QUESTION? <br /> WE WILL HELP YUU SOLVE IT VIA
          EMAIL
        </p>
        <a href="mailto:support@besart.shop" className={emailLinkStyle}>
          SUPPORT@BESART.SHOP
          <img src={arrowIcon} alt="arrow" className={arrowStyle} />
        </a>
      </div>
    </div>
  );
}

export default ContactEmail;
