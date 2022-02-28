import React from "react";
import iconSlider from "../assets/icon-slider.svg";

const SliderBar = () => {
  return (
    <div className="relative mt-5 flex h-9 w-full justify-center">
      <div className="flex h-2 w-[17.4375rem] overflow-hidden rounded-full">
        <div className="h-full w-1/2 bg-primary-fullSliderBar"></div>
        <div className="h-full w-1/2 bg-neutral-emptySliderBar"></div>
      </div>
      <div className="absolute -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-sliderBackground">
        <img src={iconSlider} alt="" />
      </div>
    </div>
  );
};

export default SliderBar;
