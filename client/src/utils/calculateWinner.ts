import { XorO } from "../types";

export const calculateWinner = (
    squares: (XorO | undefined)[],
    size: number,
    lastMove: number | null
  ) => {
    if (lastMove === null) return null;

    //Find cordinates in grid for last move
    const row = Math.floor(lastMove / size);
    const col = lastMove % size;
    const player = squares[lastMove];
    //Use these cordinates to check the relevant row/column/diagonals of the latest move

    // Check row to see if all symbols match the latest players
    let rowWin = true;
    for (let i = 0; i < size; i++) {
      if (squares[row * size + i] !== player) {
        rowWin = false;
        break;
      }
    }
    if (rowWin) return player;

    // Check column to see if all symbols match the latest players
    let colWin = true;
    for (let i = 0; i < size; i++) {
      if (squares[i * size + col] !== player) {
        colWin = false;
        break;
      }
    }
    if (colWin) return player;

    // Check diagonal (top-left to bottom-right) to see if all symbols match the latest players
    if (row === col) {
      let diagWin = true;
      for (let i = 0; i < size; i++) {
        if (squares[i * size + i] !== player) {
          diagWin = false;
          break;
        }
      }
      if (diagWin) return player;
    }

    // Check anti-diagonal (top-right to bottom-left) to see if all symbols match the latest players
    if (row + col === size - 1) {
      let antiDiagWin = true;
      for (let i = 0; i < size; i++) {
        if (squares[i * size + (size - 1 - i)] !== player) {
          antiDiagWin = false;
          break;
        }
      }
      if (antiDiagWin) return player;
    }

    return null;
  };