import React from "react";
import SliderBar from "./SliderBar";
import ToggleBar from "./ToggleBar";

const UpperPart = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="absolute top-[14.625rem] z-20 h-[29.9375rem] w-[20.4375rem] rounded-lg bg-neutral-priceComponentBackground shadow-xl">
        <div className="flex h-[4.6875rem] w-full items-center justify-center text-sm font-extrabold tracking-widest text-neutral-text">
          100K PAGEVIEWS
        </div>
        <SliderBar />
        <div className="flex h-16 items-center justify-center ">
          <p className="mr-2 text-[1.875rem] font-extrabold text-neutral-text_ctaBackground">
            $16.00
          </p>
          <p className="text-sm text-neutral-text">/ month</p>
        </div>
        <div className="mt-7 flex h-[1.375rem] w-full items-center justify-evenly">
          <p className="text-xs text-neutral-text">Monthly Billing</p>
          <ToggleBar />
          <p className="text-xs text-neutral-text">Monthly Billing</p>
          <div className="flex h-full w-10 items-center justify-center rounded-full bg-primary-discountBackground">
            <p className="text-[0.625rem] font-extrabold text-primary-discountText">
              -25%
            </p>
          </div>
        </div>
        <div className="mt-[2.375rem] h-[0.0625rem] w-full bg-[#EEF1FA]"></div>
      </div>
    </div>
  );
};

export default UpperPart;
