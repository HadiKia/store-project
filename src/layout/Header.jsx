import saleBanner from "../assets/sale-banner.png";
import saleBanner2 from "../assets/sale-banner-mobile.png";
import bagIcon from "../assets/bag.svg";
import chevron from "../assets/chevronDown.svg";
import topSection from "../assets/top-section.png";
import brands from "../assets/brands.png";

function Header() {
  return (
    <>
      <img src={saleBanner} alt="banner" className="hidden lg:block w-full" />
      <img src={saleBanner2} alt="banner" className="lg:hidden w-full" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 lg:py-3">
          <div className="flex-1 hidden md:flex items-center gap-x-2 text-[10px] text-[#000C22] font-medium md:text-base md:gap-x-5">
            <span className="opacity-40 hover:opacity-100 duration-300 cursor-pointer">
              WOMAN
            </span>
            <span className="opacity-40 hover:opacity-100 duration-300 cursor-pointer">
              MAN
            </span>
            <span className="opacity-40 hover:opacity-100 duration-300 cursor-pointer">
              KIDS
            </span>
          </div>

          <h1 className=" text-[#000C22] text-2xl lg:text-3xl font-bold">
            BESART
          </h1>

          <div className="flex-1 flex justify-end">
            <div className="bg-[#F2F2F2] grid place-items-center w-[46px] h-[46px] rounded-full">
              <img src={bagIcon} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[#000C22] font-medium text-sm xl:text-lg pt-3 pb-6">
          <div className="flex-1">search</div>

          <div className="hidden lg:flex items-center gap-x-3 lg:gap-x-[19px]">
            <span className="hover:text-[#491E4B] duration-300 cursor-pointer">
              NEWS&SALES
            </span>
            <span className="hover:text-[#491E4B] duration-300 cursor-pointer">
              CLOTHING
            </span>
            <span className="hover:text-[#491E4B] duration-300 cursor-pointer">
              SHOES
            </span>
            <span className="hover:text-[#491E4B] duration-300 cursor-pointer">
              ACCESSORIES
            </span>
            <span className="hover:text-[#491E4B] duration-300 cursor-pointer">
              BAGS
            </span>
            <span className="hover:text-[#491E4B] duration-300 cursor-pointer">
              JEWELRY
            </span>
            <span className="hover:text-[#491E4B] duration-300 cursor-pointer">
              BRANDS
            </span>
            <span className="hover:text-[#491E4B] duration-300 cursor-pointer">
              ALL WOMEN'S
            </span>
          </div>

          <div className="flex-1 hidden lg:flex justify-end items-center">
            <div className="flex items-center gap-x-2 pr-5 border-r border-[#E5E5E5]">
              <span>USD</span>
              <img src={chevron} alt="chevron" />
            </div>
            <div className="flex items-center gap-x-2 pl-5">
              <span>INFO</span>
              <img src={chevron} alt="chevron" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-items-center">
        <img src={topSection} alt="section" className="w-full" />
        <img
          src={brands}
          alt="brands"
          className="relative -top-3 md:-top-5 lg:-top-7 xl:-top-12 scale-95 2xl:scale-100 rounded-lg"
        />
      </div>
    </>
  );
}

export default Header;
