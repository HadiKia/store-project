import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import pinterest from "../assets/pinterest.svg";
import appleStore from "../assets/apple-store.png";
import googlePlay from "../assets/google-play.png";
import chevronDown from "../assets/chevronDown.svg";

const footerStyle = "container mx-auto px-4 text-[#000C22]  mt-12";
const footerItem1Style =
  "flex items-start flex-wrap gap-8 md:gap-x-10 md:gap-y-5 xl:gap-x-24 justify-between py-6 lg:py-12 border-y mb-4 md:mb-5";
const footerItem2Style =
  "flex flex-col gap-y-3.5 md:flex-row items-center justify-between text-xs md:text-sm pb-4 md:pb-5";
const titleStyle = "text-2xl lg:text-3xl font-bold mb-5 lg:mb-7";
const socialMediaStyle = "flex items-center gap-x-3 lg:gap-x-4";
const socialMediaIconStyle = "scale-90 lg:scale-100";
const ulStyle =
  "flex flex-col gap-y-1 lg:gap-y-3 text-sm xl:text-base font-medium";
const ulTitleStyle = "opacity-50 mb-1.5";
const downloadTitleStyle =
  "opacity-50 mb-2.5 lg:mb-5 text-sm xl:text-base font-medium";
const downloadBoxStyle = "flex flex-col md:flex-row items-center gap-1";
const downloadImgStyle = "w-36 md:w-full";

function Footer() {
  return (
    <div className={footerStyle}>
      <div className={footerItem1Style}>
        <div className="xl:flex-1">
          <h3 className={titleStyle}>BESART</h3>
          <div className={socialMediaStyle}>
            <img
              src={instagram}
              alt="instagram"
              className={socialMediaIconStyle}
            />
            <img
              src={facebook}
              alt="facebook"
              className={socialMediaIconStyle}
            />
            <img src={twitter} alt="twitter" className={socialMediaIconStyle} />
            <img
              src={pinterest}
              alt="pinterest"
              className={socialMediaIconStyle}
            />
          </div>
        </div>
        <div>
          <ul className={ulStyle}>
            <h4 className={ulTitleStyle}>Help and info</h4>
            <li>Returns and complaints</li>
            <li>Delivery & Payment</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul className={ulStyle}>
            <h4 className={ulTitleStyle}>Cooperation</h4>
            <li>Brand files</li>
            <li>Media</li>
            <li>About BESART</li>
          </ul>
        </div>
        <div>
          <h4 className={downloadTitleStyle}>Download</h4>
          <div className={downloadBoxStyle}>
            <img
              src={appleStore}
              alt="apple-store"
              className={downloadImgStyle}
            />
            <img
              src={googlePlay}
              alt="google-play"
              className={downloadImgStyle}
            />
          </div>
        </div>
      </div>

      <div className={footerItem2Style}>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2 font-medium">
            <span>EN</span>
            <img src={chevronDown} alt="chevron" />
          </div>
          <span className="opacity-50">Terms & Conditions</span>
          <span className="opacity-50">Privacy Policy</span>
        </div>

        <p className="opacity-50 ">Developed by Hadi Kia with ❤️</p>
      </div>
    </div>
  );
}

export default Footer;
