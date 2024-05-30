import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Main } from "../main";
import { calculateWinner } from "../utils/calculateWinner";

jest.mock("../utils/calculateWinner");

describe("Main component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Tic Tac Toe title renders", () => {
    render(<Main />);
    expect(screen.getByText("Tic Tac Toe")).toBeInTheDocument();
  });

  test("initial state and status message", () => {
    render(<Main />);
    expect(screen.getByText("Next player is: X")).toBeInTheDocument();
    //expect(screen.getAllByRole("button")).toHaveLength(9); // 3x3 board
  });

  test("clicking on a square updates the board", () => {
    render(<Main />);
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent("X");
    expect(screen.getByText("Next player is: O")).toBeInTheDocument();
  });

  test("clicking on a square twice does not change it", () => {
    render(<Main />);
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent("X");
    expect(screen.getByText("Next player is: O")).toBeInTheDocument();
  });

//   test("winning the game displays winner message", () => {
//     calculateWinner.mockReturnValue("X");
//     render(<Main />);
//     const squares = screen.getAllByRole("button");
//     fireEvent.click(squares[0]);
//     fireEvent.click(squares[1]);
//     fireEvent.click(squares[2]);
//     fireEvent.click(squares[3]);
//     fireEvent.click(squares[4]);
//     expect(screen.getByText("Player X is the winner!")).toBeInTheDocument();
//   });

  test("reset button resets the game", () => {
    render(<Main />);
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent("X");

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    expect(squares[0]).toHaveTextContent("");
    expect(screen.getByText("Next player is: X")).toBeInTheDocument();
  });
});
