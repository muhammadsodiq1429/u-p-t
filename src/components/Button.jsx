import React from "react";

const Button = ({ className, onClick, children }) => {
  return (
    <button
      className={`p-2 rounded-2xl border-4 text-2xl cursor-pointer border-green-400 text-green-700 font-bold flex items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
