import React from "react";
import SliderBar from "./SliderBar";
import ToggleBar from "./ToggleBar";

const UpperPart = () => {
  return (
    <div>
      <div className="flex h-[4.6875rem] w-full items-center justify-center text-sm font-extrabold tracking-widest text-neutral-text lg:mt-5 lg:ml-11 lg:w-1/2 lg:items-center lg:justify-start lg:pt-4 lg:pl-1">
        100K PAGEVIEWS
      </div>
      <SliderBar />
      <div className="flex h-16 items-center justify-center lg:absolute lg:top-8 lg:right-12">
        <p className="mr-2 text-[1.875rem] font-extrabold text-neutral-text_ctaBackground lg:text-[2.5rem]">
          $16.00
        </p>
        <p className="text-sm text-neutral-text lg:text-lg">/ month</p>
      </div>
      <div className="mt-7 flex h-[1.375rem] w-full items-center justify-evenly lg:ml-36 lg:w-[20.125rem]">
        <p className="text-xs text-neutral-text">Monthly Billing</p>
        <ToggleBar />
        <p className="text-xs text-neutral-text">Yearly Billing</p>
        <div className="flex h-full w-10 items-center justify-center rounded-full bg-primary-discountBackground">
          <p className="text-[0.625rem] font-extrabold text-primary-discountText">
            -25%
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpperPart;
