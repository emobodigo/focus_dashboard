import React from "react";

const SimpleButton = ({ type, ...props }) => {
  return (
    <button
      type={type}
      className="outline-none rounded-xl m-6 w-72 px-4 py-3 font-semibold bg-pink-500 hover:bg-pink-600"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default SimpleButton;
