import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import pinterest from "../assets/pinterest.svg";
import appleStore from "../assets/apple-store.png"
import googlePlay from "../assets/google-play.png"
import chevronDown from "../assets/chevronDown.svg"

function Footer() {
  return (
    <div className="container mx-auto px-4 text-[#000C22]  mt-12">
      <div className="flex items-start flex-wrap gap-8 md:gap-x-10 md:gap-y-5 xl:gap-x-24 justify-between py-6 lg:py-12 border-y mb-4 md:mb-5">
        <div className="xl:flex-1">
          <h3 className="text-2xl lg:text-3xl font-bold mb-5 lg:mb-7">BESART</h3>
          <div className="flex items-center gap-x-3 lg:gap-x-4">
            <img src={instagram} alt="instagram" className="scale-90 lg:scale-100"/>
            <img src={facebook} alt="facebook" className="scale-90 lg:scale-100"/>
            <img src={twitter} alt="twitter" className="scale-90 lg:scale-100"/>
            <img src={pinterest} alt="pinterest" className="scale-90 lg:scale-100"/>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-y-1 lg:gap-y-3 text-sm xl:text-base font-medium">
            <h4 className="opacity-50 mb-1.5">Help and info</h4>
            <li>Returns and complaints</li>
            <li>Delivery & Payment</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
        <ul className="flex flex-col gap-y-1 lg:gap-y-3 text-sm xl:text-base font-medium">
            <h4 className="opacity-50 mb-1.5">Cooperation</h4>
            <li>Brand files</li>
            <li>Media</li>
            <li>About BESART</li>
          </ul>
        </div>
        <div>
          <h4 className="opacity-50 mb-2.5 lg:mb-5 text-sm xl:text-base font-medium">Download</h4>
          <div className="flex flex-col md:flex-row items-center gap-1">
            <img src={appleStore} alt="apple-store" className="w-36 md:w-full"/>
            <img src={googlePlay} alt="google-play" className="w-36 md:w-full"/>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-3.5 md:flex-row items-center justify-between text-xs md:text-sm pb-4 md:pb-5">
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
