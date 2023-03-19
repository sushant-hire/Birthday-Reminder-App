import React from "react";

function CustomInput({ type, placeholder, className, onChange, value, name }) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default CustomInput;
