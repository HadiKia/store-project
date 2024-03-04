import { useTitle } from "../hooks/useTitle";
import ContactEmail from "../components/ContactEmail";

import mapImage from "../assets/map.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import arrow from "../assets/arrow2.svg";

// styles
import {
  bannerDivStyle,
  h3Style,
  bannerPStyle,
  containerStyle,
} from "./PrivacyPolicy";
const mainDivStyle =
  "flex flex-col gap-y-9 md:flex-row  md:items-start md:justify-center md:gap-x-10 lg:gap-x-20";
const mainItemStyle =
  "flex items-center justify-between md:flex-col md:items-start md:gap-y-5";
const mainItemContactDivStyle = "font-medium md:border-b md:pb-5 lg:text-lg";
const mapImageStyle = "my-12 md:my-24 lg:my-32 rounded-md";
const socialMediaStyle = "flex items-center gap-x-3 lg:gap-x-4";
const formDivStyle = "flex flex-col gap-y-1.5 w-full md:max-w-md";
const inputStyle = "outline-none px-4 py-2 border rounded-[5px]";
const formButtonStyle =
  "flex items-center justify-center gap-x-2 bg-[#491E4B] text-white rounded-full text-xs py-3 font-medium md:text-sm md:py-3.5";

function ContactUs() {
  useTitle("Contact Us");
  return (
    <div className="text-[#000C22]">
      <div className={bannerDivStyle}>
        <h3 className={h3Style}>CONTACT US</h3>
        <p className={bannerPStyle}>
          The customer service center is open from 08:00 to 20:00 7 days a week
        </p>
      </div>

      <div className={containerStyle}>
        <div className={mainDivStyle}>
          <div className={mainItemStyle}>
            <div className={mainItemContactDivStyle}>
              <p>+ 901-219-841-19</p>
              <a
                href="mailto:support@besart.shop"
                className="text-sm md:text-base"
              >
                SUPPORT@BESART.SHOP
              </a>
            </div>
            <div className={socialMediaStyle}>
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>

          <div className={formDivStyle}>
            <input type="text" placeholder="Name" className={inputStyle} />
            <input type="email" placeholder="E-mail" className={inputStyle} />
            <input type="number" placeholder="Phone" className={inputStyle} />
            <textarea
              rows="5"
              placeholder="Comment"
              className={`${inputStyle} my-5`}
            />
            <button className={formButtonStyle}>
              SEND REQUEST <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>

        <img src={mapImage} alt="map" className={mapImageStyle} />
        <ContactEmail />
      </div>
    </div>
  );
}

export default ContactUs;
