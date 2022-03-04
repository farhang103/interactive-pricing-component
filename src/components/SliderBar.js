import React from "react";
import iconSlider from "../assets/icon-slider.svg";

const SliderBar = ({ handleChange, value }) => {
  return (
    <div className="relative mt-5 flex h-9 w-full justify-center lg:mt-10">
      <div className="flex h-2 w-[17.4375rem] overflow-hidden rounded-full lg:w-[27.75rem]">
        <input
          type="range"
          className="h-full w-full"
          min="1"
          max="200"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="absolute -top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary-sliderBackground">
        <img src={iconSlider} alt="" />
      </div>
    </div>
  );
};

export default SliderBar;
