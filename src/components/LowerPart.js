import React from "react";
import iconCheck from "../assets/icon-check.svg";

const LowerPart = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-6 flex h-[4.1875rem] w-full flex-col items-center justify-between lg:mt-9 lg:ml-12 lg:items-start">
        <div className="flex items-center justify-center">
          <img
            src={iconCheck}
            alt=""
            className="mr-[0.9375rem] h-2 w-[0.5625rem]"
          />
          <p className="text-xs text-neutral-text">Unlimited websites</p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={iconCheck}
            alt=""
            className="mr-[0.9375rem] h-2 w-[0.5625rem]"
          />
          <p className="text-xs text-neutral-text">100% data ownership</p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={iconCheck}
            alt=""
            className="mr-[0.9375rem] h-2 w-[0.5625rem]"
          />
          <p className="text-xs text-neutral-text">Email reports</p>
        </div>
      </div>
      <div className="bottom-12 right-12 lg:absolute">
        <button className="mt-[2.0625rem] flex h-[2.5625rem] w-[10.625rem] items-center justify-center rounded-full bg-neutral-text_ctaBackground p-4 text-sm text-primary-ctaText hover:text-[#F7FDFF] lg:m-0">
          Start my trial
        </button>
      </div>
    </div>
  );
};

export default LowerPart;
