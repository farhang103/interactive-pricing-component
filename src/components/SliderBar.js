import React from "react";

const SliderBar = ({ handleChange, value, style }) => {
  return (
    <div className="relative mt-5 flex h-9 w-full justify-center lg:mt-10">
      <div className="relative flex h-2 w-[17.4375rem] rounded-full lg:w-[27.75rem]">
        <input
          type="range"
          className="h-full w-full rounded-full"
          min="1"
          max="200"
          value={value}
          onChange={handleChange}
          style={style}
        />
      </div>
    </div>
  );
};

export default SliderBar;
