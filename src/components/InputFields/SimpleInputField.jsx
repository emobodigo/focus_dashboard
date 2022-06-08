import React from "react";

const SimpleInputField = ({ onChange, onBlur, value, type, ...props }) => {
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      type={type}
      autoComplete={type === "password" ? "off" : "on"}
      className={`border-gray-500 border-2 rounded-xl m-2 placeholder:italic placeholder:text-slate-400 text-sm w-72 px-4 focus:bg-slate-800 py-3 bg-custom-dark text-custom-white`}
      {...props}
    />
  );
};

export default SimpleInputField;
