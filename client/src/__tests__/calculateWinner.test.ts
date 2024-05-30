import { XorO } from "../types";
import { calculateWinner } from "../utils/calculateWinner";

describe("calculateWinner", () => {
  it("should return null with no winner", () => {
    const squares: (XorO | undefined)[] = [
      "X", "O", "X",
      "X", "O", "O",
      "O", "X", "X",
    ];
    expect(calculateWinner(squares, 3, 8)).toBeNull();
  });

  it("should return X for winning row", () => {
    const squares: (XorO | undefined)[] = [
      "X", "X", "X",
      "X", "O", "O",
      "O", "X", "X",
    ];
    expect(calculateWinner(squares, 3, 2)).toBe("X");
  });

  it('should return "O" for a winning column', () => {
    const squares: (XorO | undefined)[] = [
      'O', 'X', undefined,
      'O', 'X', undefined,
      'O', undefined, 'X'
    ];
    expect(calculateWinner(squares, 3, 6)).toBe('O');
  });

  it('should return "X" for a winning diagonal', () => {
    const squares: (XorO | undefined)[] = [
      "X", "O", "O",
      undefined, "X", "O",
      "O", undefined, "X",
    ];
    expect(calculateWinner(squares, 3, 8)).toBe("X");
  });

  it('should return "O" for a winning anti-diagonal', () => {
    const squares: (XorO | undefined)[] = [
      "X", "X", "O",
      undefined, "O", "X",
      "O", undefined, "X",
    ];
    expect(calculateWinner(squares, 3, 2)).toBe("O");
  });
});
