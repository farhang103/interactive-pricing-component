import React from "react";

const ToggleBar = () => {
  return (
    <div className="flex h-full w-11 cursor-pointer items-center rounded-full bg-neutral-toggleBackground hover:bg-[#7DE8DE]">
      <div className="ml-1 h-[0.875rem] w-[0.875rem] rounded-full bg-white"></div>
    </div>
  );
};

export default ToggleBar;
