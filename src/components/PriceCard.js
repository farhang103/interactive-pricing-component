import React from "react";
import LowerPart from "./LowerPart";
import UpperPart from "./UpperPart";

const PriceCard = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="absolute top-[14.625rem] z-20 h-[29.9375rem] w-[20.4375rem] rounded-lg bg-neutral-priceComponentBackground shadow-lg lg:h-[24.8125rem] lg:w-[33.75rem]">
        <UpperPart />
        <div className="mt-[2.375rem] h-[0.0625rem] w-full bg-[#EEF1FA]"></div>
        <LowerPart />
      </div>
    </div>
  );
};

export default PriceCard;
