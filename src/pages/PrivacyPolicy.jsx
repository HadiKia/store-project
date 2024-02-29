import {
  definitionsOfConcepts,
  detailedPurposes,
  cookiesFileManagement,
  newsletter,
} from "../constants/privacyPolicy";

import arrowIcon from "../assets/arrow.svg";

// styles
export const bannerDivStyle =
  "text-center bg-[#EEE9DC] px-5 py-10 md:py-20 lg:py-24";
export const h3Style = "text-4xl md:text-5xl font-medium mb-3";
export const bannerPStyle = "text-xs leading-5 md:text-sm lg:text-base";
export const containerStyle = "container mx-auto px-5 my-10 md:my-14 lg:my-20";
export const contentBoxStyle =
  "flex flex-col md:flex-row md:items-start md:justify-between gap-y-4 lg:gap-x-14 pb-8 md:pb-11 mb-8 md:mb-11 border-b border-[#000D21] border-opacity-5";
export const h5Style = "font-medium text-2xl flex-1 max-w-lg md:text-3xl";
export const contentStyle =
  "flex-1 flex flex-col gap-y-3 md:gap-y-5 text-xs leading-5 opacity-80 md:text-base ";
export const emailBoxStyle =
  "bg-[#F2F2F3] flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-5 rounded-md text-xs font-medium leading-5 md:text-sm md:px-8 md:py-6 lg:py-8 lg:text-lg lg:px-10";
export const emailBoxPStyle = "text-sm md:text-base lg:text-2xl";
export const emailLinkStyle = "flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3";
export const arrowStyle = "scale-[0.65] md:scale-75 lg:scale-95";

function PrivacyPolicy() {
  return (
    <div className="text-[#000C22]">
      <div className={bannerDivStyle}>
        <h3 className={h3Style}>PRIVACY POLICY</h3>
        <p className={bannerPStyle}>
          This Privacy Policy establishes the Rules for storing and accessing
          information <br className="hidden md:block" /> on the User’s devices
          using cookies, to provide electronic services requested by the User
        </p>
      </div>

      <div className={containerStyle}>
        <div className={contentBoxStyle}>
          <h5 className={h5Style}>DEFINITIONS OF CONCEPTS</h5>
          <div className={contentStyle}>
            {definitionsOfConcepts.map((p) => (
              <p key={p.id}>{p.type}</p>
            ))}
          </div>
        </div>

        <div className={contentBoxStyle}>
          <h5 className={h5Style}>
            DETAILED PURPOSES OF USING THE REQUIRED COOKIES FILES:
          </h5>
          <div className={contentStyle}>
            {detailedPurposes.map((p) => (
              <p key={p.id}>{p.type}</p>
            ))}
          </div>
        </div>

        <div className={contentBoxStyle}>
          <h5 className={h5Style}>COOKIES FILE MANAGEMENT IN THE SERVICE</h5>
          <div className={contentStyle}>
            {cookiesFileManagement.map((p) => (
              <p key={p.id}>{p.type}</p>
            ))}
          </div>
        </div>

        <div className={contentBoxStyle}>
          <h5 className={h5Style}>COOKIES SHELF LIFE</h5>
          <p className={contentStyle}>
            If the User does not remove the COOKIES files from their devices,
            they will be stored for 60 days from the date of their recording.
          </p>
        </div>

        <div className={`${contentBoxStyle} !border-none`}>
          <h5 className={h5Style}>NEWSLETTER</h5>
          <div className={contentStyle}>
            {newsletter.map((p) => (
              <p key={p.id}>{p.type}</p>
            ))}
          </div>
        </div>

        <div className="pb-14 md:pb-20">
          <div className={emailBoxStyle}>
            <p className={emailBoxPStyle}>
              Do YOU HAVE AN URGENT QUESTION? <br /> WE WILL HELP YUU SOLVE IT
              VIA EMAIL
            </p>
            <a href="mailto:support@besart.shop" className={emailLinkStyle}>
              SUPPORT@BESART.SHOP
              <img src={arrowIcon} alt="arrow" className={arrowStyle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
