import React, { useState } from "react";

const ToggleBar = ({ onClick }) => {
  const [toggle, setToggle] = useState(true);

  const toggleClass = " transform translate-x-5";

  return (
    <>
      <div
        className={
          "flex h-full w-full cursor-pointer items-center rounded-full " +
          (toggle ? "bg-neutral-toggleBackground" : "bg-[#7DE8DE]")
        }
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={
            "ml-1 h-[0.875rem] w-[0.875rem] rounded-full bg-white transition " +
            (toggle ? null : toggleClass)
          }
        ></div>
      </div>
    </>
  );
};

export default ToggleBar;
