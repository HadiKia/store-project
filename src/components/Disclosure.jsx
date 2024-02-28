import { Disclosure } from "@headlessui/react";

import plusIcon from "../assets/plus2.svg";

const disclosureBoxStyle = "border-b";
const disclosureTitleStyle =
  "flex items-center justify-between w-full p-2 md:px-3 rounded-md md:rounded-lg lg:text-lg";
const activeStyle = `${disclosureTitleStyle} bg-[#F7F8F8]`;
const disclosureDescriptionStyle =
  " text-xs px-4 md:px-5 leading-5 md:leading-6 opacity-70 pb-2 bg-[#F7F8F8] lg:text-sm lg:leading-6";

function DisclosureItem({ title, description, isLastItem }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className={isLastItem ? "" : disclosureBoxStyle}>
          <Disclosure.Button
            className={open ? activeStyle : disclosureTitleStyle}
          >
            <p>{title}</p>
            <img
              src={plusIcon}
              alt="chevron"
              className={open ? "rotate-45 duration-500" : "duration-500"}
            />
          </Disclosure.Button>

          <Disclosure.Panel className={disclosureDescriptionStyle}>
            {({ close }) => (
              <p
                onClick={async () => {
                  await fetch("/accept-terms", { method: "POST" });
                  close();
                }}
              >
                {description}
              </p>
            )}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default DisclosureItem;
