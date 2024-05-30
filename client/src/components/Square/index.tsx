import React from "react";
import { XorO } from "../../types";

export const Square = ({
  value,
  onClick,
}: {
  value: XorO | undefined;
  onClick: () => void;
}) => {
  return (
    <button
      className="border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
