import Disclosure from "../components/Disclosure";

import searchIcon from "../assets/search.svg";

// styles
import {
  bannerDivStyle,
  h3Style,
  bannerPStyle,
  containerStyle,
  contentBoxStyle,
  h5Style,
  contentStyle,
} from "./PrivacyPolicy";
import ContactEmail from "../components/ContactEmail";

function HelpCenter() {
  return (
    <div className="text-[#000C22]">
      <div className={`${bannerDivStyle} !relative mb-20 md:mb-24 lg:mb-28`}>
        <h3 className={h3Style}>HELP CENTER</h3>
        <p className={bannerPStyle}>
          Use search to quickly find the category or answer you want
        </p>
        <div className="absolute left-0 right-0 -bottom-8 px-5">
          <div className="flex items-center justify-center bg-white px-5 py-4 rounded-lg shadow md:max-w-md md:mx-auto md:px-7 md:py-5 lg:max-w-lg xl:max-w-2xl">
            <input
              type="text"
              placeholder="Start typing"
              className="w-full bg-transparent outline-none"
            />
            <img src={searchIcon} alt="search" />
          </div>
        </div>
      </div>

      <div className={containerStyle}>
        <div className={contentBoxStyle}>
          <h5 className={h5Style}>CUSTOMER SERVICE CENTER</h5>
          <div className={`${contentStyle} font-medium !gap-y-1`}>
            <Disclosure
              title="HOW CAN I CONTACT THE CUSTOMER SERVICE CENTER?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />

            <Disclosure
              title="AT WHAT DAY CAN I CONTACT THE CUSTOMER SERVICE CENTER?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="CAN A CUSTOMER SERVICE CENTER EMPLOYEE MAKE AN ORDER OF ME?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
          </div>
        </div>

        <div className={contentBoxStyle}>
          <h5 className={h5Style}>PAYMENT</h5>
          <div className={`${contentStyle} font-medium !gap-y-1`}>
            <Disclosure
              title="HOW CAN I PAY FOR ORDERS?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="WHAT SHOULD I KNOW WHEN BUYING GOODS MORE THAN 100 EUROS?"
              description="If you have chosen a product whose value exceeds 100 euros, according to the legislation of Ukraine, you must pay value added tax (VAT), which is calculated by the State Customs. As an example, look at the second row in the table. If you choose goods worth more than 150 euros, according to Ukrainian law, you must pay value added tax (VAT) and customs duty, which is calculated by the State Customs Service of Ukraine on the day of importation into the country in UAH at the NBU rate according to this formula : VAT = (cost of goods - 100 euros + customs duty (cost of goods - 150 euros) * 10%) * 20%. On the day of importing the parcel to Ukraine, you will receive an SMS to the phone number you specified when placing the order, from the State Customs Service of Ukraine with the amount of tax and details for payment. After paying the tax (at the bank, terminal or online) your parcel will be handed over to the Meest Courier for delivery or sent to the Nova Poshta branch specified by you."
              isLastItem
            />
          </div>
        </div>

        <div className={contentBoxStyle}>
          <h5 className={h5Style}>TECHNICAL PROBLEMS</h5>
          <div className={`${contentStyle} font-medium !gap-y-1`}>
            <Disclosure
              title="HOW TO SUBSCRIBE FROM THE NEWSLETTER?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="CAN MY ACCOUNT BE BLOCKED?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="I WANT TO DELETE MY ACCOUNT. HOW TO DO IT?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="I CAN'T LOG IN TO MY ACCOUNT. WHAT SHALL I DO?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
          </div>
        </div>

        <div className={contentBoxStyle}>
          <h5 className={h5Style}>GOODS</h5>
          <div className={`${contentStyle} font-medium !gap-y-1`}>
            <Disclosure
              title="CAN I ORDER GOODS THAT HAVE ALREADY BEEN SOLD?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="HOW TO FIND THE DESIRED PRODUCT AS SOON AS POSSIBLE?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
          </div>
        </div>

        <div className={`${contentBoxStyle} !border-none`}>
          <h5 className={h5Style}>SENDING AND DELIVERY OF ORDERS</h5>
          <div className={`${contentStyle} font-medium !gap-y-1`}>
            <Disclosure
              title="WHAT IS THE COST OF SHIPPING?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="WHAT ARE THE DELIVERY TIMES?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="HOW DO I KNOW IF MY ORDER HAS BEEN SENT?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="CAN I RECEIVE MY ORDER ON THE WEEKEND?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="IS IT POSSIBLE TO POSTPOND DELIVERY?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
            <Disclosure
              title="WILL THE COURIER CONTACT ME?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate accusantium ex, ullam doloribus pariatur ad delectus est, suscipit soluta sed recusandae natus sequi consequatur cum corrupti dolorem laborum quo libero sunt quaerat tempore veniam id? Inventore numquam fuga, a quidem non reprehenderit enim sit. Autem dolor nulla enim ad!"
              isLastItem
            />
          </div>
        </div>

        <ContactEmail />
      </div>
    </div>
  );
}

export default HelpCenter;
