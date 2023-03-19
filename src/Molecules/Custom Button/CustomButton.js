import React from "react";

function CustomButton({ buttonText, onClick, className }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default CustomButton;
