import { BOARD_SIZE } from '../constants/board';
import { SquareType } from '../hooks/usePlayGame';

export type Board = Record<string, SquareType>;

export const getFilledBoard = () => {
  const board: Board = {};

  for (let key = 0; key < BOARD_SIZE; key++) {
    board[key] = null;
  }

  return board;
};

export const isWinnerSquare = (
  boardKey: string,
  winningCombination?: [number, number, number] | null
) => {
  if (!winningCombination) {
    return false;
  }

  return winningCombination.includes(Number(boardKey));
};
