import React, { useEffect, useState } from "react";
import { XorO } from "../../types";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  initialValue: number;
  setBoard: React.Dispatch<React.SetStateAction<(XorO | undefined)[]>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  initialValue = 3,
  setBoard,
  setSize,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  // Update the state when initialValue prop changes
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    setSize(Number(e.target.value));
    setBoard(Array(Number(e.target.value) ** 2).fill(undefined));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
        Board size: {value}
      </div>
    </div>
  );
};
