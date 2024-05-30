import React, { useState } from "react";
import { XorO } from "./types";
import { Square } from "./components/Square";
import { Slider } from "./components/Slider";
import { calculateWinner } from "./utils/calculateWinner";

export const Main = () => {
  const [size, setSize] = useState<number>(3);
  const [board, setBoard] = useState<(XorO | undefined)[]>(
    Array(size ** 2).fill(undefined)
  );
  //More concise to use the Array().fill method
  const [isX, setIsX] = useState<boolean>(true);
  const [lastMove, setLastMove] = useState<number | null>(null);

  const handleClick = (index: number) => {
    //If user has clicked on an already entered box then return
    if (board[index]) return;
    //Get the current board array
    const nextSquares = board.slice();
    //If isX is true, set value for that index in the array to 'X', else 'O'
    nextSquares[index] = isX ? "X" : "O";
    //Update board state
    setBoard(nextSquares);
    setIsX(!isX);
    setLastMove(index);

    if (calculateWinner(nextSquares, size, index)) {
      return;
    }
  };

  const handleResetClick = () => {
    setSize(3);
    setBoard(Array(9).fill(undefined));
    setIsX(true);
  };

  const winner = calculateWinner(board, size, lastMove);
  const status = winner
    ? `Player ${winner} is the winner!`
    : `Next player is: ${isX ? "X" : "O"}`;

  //Tailwind only goes up to 12 in grid-cols, so can set it dynamically here
  const gridTemplateColumnsStyle = {
    gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
  };

  return (
    <div className="flex flex-col mt-10 items-center gap-8">
      <div className="font-bold text-2xl">Tic Tac Toe</div>
      <div>{status}</div>
      <div className="flex flex-col gap-1">
        <div className={`grid gap-2`} style={gridTemplateColumnsStyle}>
          {board.map((square, index) => (
            <Square
              key={index}
              value={square}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
      <Slider
        min={3}
        max={15}
        step={2}
        initialValue={size}
        setBoard={setBoard}
        setSize={setSize}
      />
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
};
