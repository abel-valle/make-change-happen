import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-teal-500 text-teal-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-teal-500 hover:text-white-500 transition-all hover:shadow-teal">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
